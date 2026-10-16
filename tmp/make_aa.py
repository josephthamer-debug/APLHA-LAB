import os
import subprocess

CHROME_BIN = "/ms-playwright/chromium_headless_shell-1247/chrome-headless-shell-linux64/chrome-headless-shell"
PUBLIC_DIR = "/app/applet/public"
os.makedirs(PUBLIC_DIR, exist_ok=True)

# 1. Generate aa.png (The Alpha Lab Metallic Lion Emblem)
aa_html = """<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    width: 1024px;
    height: 1024px;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
  svg {
    width: 960px;
    height: 960px;
    filter: drop-shadow(0 20px 30px rgba(0,0,0,0.6));
  }
</style>
</head>
<body>
<svg viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="metalGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#E2E8F0" />
      <stop offset="25%" stop-color="#94A3B8" />
      <stop offset="50%" stop-color="#CBD5E1" />
      <stop offset="75%" stop-color="#475569" />
      <stop offset="100%" stop-color="#1E293B" />
    </linearGradient>
    <linearGradient id="goldTrim" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FDE68A" />
      <stop offset="50%" stop-color="#D97706" />
      <stop offset="100%" stop-color="#78350F" />
    </linearGradient>
    <linearGradient id="darkMetal" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#334155" />
      <stop offset="50%" stop-color="#0F172A" />
      <stop offset="100%" stop-color="#020617" />
    </linearGradient>
  </defs>

  <!-- Triangular Outer Chevron / Alpha A Frame -->
  <path d="M400 60 L680 660 L560 660 L400 340 L240 660 L120 660 Z" fill="url(#metalGrad1)" stroke="url(#goldTrim)" stroke-width="6" stroke-linejoin="round" />
  
  <!-- Inner Triangle Cutout -->
  <path d="M400 140 L600 600 L490 600 L400 420 L310 600 L200 600 Z" fill="url(#darkMetal)" stroke="rgba(255,255,255,0.2)" stroke-width="3" />

  <!-- Lion Head Profile Facing Right -->
  <!-- Main Mane and Profile Shapes -->
  <g transform="translate(140, 80) scale(0.68)">
    <!-- Flowing mane back curves -->
    <path d="M380 180 C260 220 180 340 160 480 C150 560 180 640 220 700 C250 640 280 580 300 500 C270 540 250 600 240 660 C260 580 300 500 350 440 C320 480 300 540 300 600 C330 520 380 440 440 380 Z" fill="url(#metalGrad1)" stroke="#0F172A" stroke-width="4" />
    <path d="M340 240 C280 320 250 420 260 520 C270 460 300 400 340 350 C320 400 310 460 320 510 C350 430 400 360 460 310 Z" fill="#F8FAFC" opacity="0.9" />
    <path d="M400 140 C340 180 300 240 280 310 C320 260 380 210 440 180 Z" fill="url(#metalGrad1)" />

    <!-- Lion Face / Forehead & Muzzle -->
    <path d="M440 180 C480 160 540 160 580 200 C620 240 640 270 650 310 C660 320 700 340 720 370 C730 385 710 405 690 410 C670 415 650 410 630 405 C640 425 650 450 630 470 C600 495 560 490 530 480 C550 500 570 530 560 550 C540 580 480 570 450 540 C430 570 400 600 360 620 C400 560 430 490 440 420 Z" fill="url(#metalGrad1)" stroke="#0F172A" stroke-width="5" />

    <!-- Lion Brow & Eye -->
    <path d="M540 250 C570 245 600 260 620 285 C600 290 570 285 550 270 Z" fill="#0F172A" />
    <polygon points="575,275 605,282 585,292" fill="#F8FAFC" />
    <circle cx="590" cy="285" r="4" fill="#0F172A" />

    <!-- Lion Nose & Snout -->
    <path d="M680 355 C705 365 715 375 710 385 C700 395 685 390 675 380 Z" fill="#0F172A" />

    <!-- Whisker lines & Muscle Definition -->
    <path d="M620 370 Q660 380 675 400" stroke="#0F172A" stroke-width="4" stroke-linecap="round" fill="none" />
    <path d="M610 390 Q640 405 660 415" stroke="#0F172A" stroke-width="3" stroke-linecap="round" fill="none" />
    
    <!-- Chin & Mane Jaw Tuft -->
    <path d="M610 460 C580 490 540 520 500 540 C480 520 490 480 520 460 Z" fill="#E2E8F0" />
    <path d="M500 540 C470 600 420 660 360 700 C390 640 430 580 460 520 Z" fill="url(#metalGrad1)" />
  </g>
</svg>
</body>
</html>
"""

with open("/tmp/aa.html", "w") as f:
    f.write(aa_html)

subprocess.run([
    CHROME_BIN,
    "--no-sandbox",
    "--headless",
    "--window-size=1024,1024",
    "--screenshot=" + os.path.join(PUBLIC_DIR, "aa.png"),
    "/tmp/aa.html"
], check=True)
print("Rendered aa.png successfully!")
