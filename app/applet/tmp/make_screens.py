import os
import subprocess

CHROME_BIN = "/ms-playwright/chromium_headless_shell-1247/chrome-headless-shell-linux64/chrome-headless-shell"
PUBLIC_DIR = "/app/applet/public"
os.makedirs(PUBLIC_DIR, exist_ok=True)

# Shared CSS styles
BASE_HEAD = """
<meta charset="utf-8">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700;800&family=JetBrains+Mono:wght@500;700&display=swap" rel="stylesheet">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Cairo', system-ui, sans-serif; }
  body {
    background-color: #08080A;
    color: #F8FAFC;
    direction: rtl;
    text-align: right;
    overflow: hidden;
  }
  .card {
    background: #101116;
    border: 1px solid #1E202A;
    border-radius: 12px;
  }
  .btn-purple {
    background: #6D28D9;
    color: white;
    font-weight: 700;
    border-radius: 8px;
    padding: 8px 18px;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    border: none;
    font-size: 14px;
  }
  .btn-dark {
    background: #181920;
    border: 1px solid #282B38;
    color: #CBD5E1;
    font-weight: 600;
    border-radius: 8px;
    padding: 8px 16px;
    font-size: 13px;
  }
</style>
"""

# -------------------------------------------------------------
# a1.png: Full Main Product Dashboard with Right Sidebar (1920x868)
# -------------------------------------------------------------
a1_html = f"""<!DOCTYPE html>
<html>
<head>
{BASE_HEAD}
<style>
  body {{ width: 1920px; height: 868px; display: flex; flex-direction: column; }}
  .top-win-bar {{
    height: 48px; background: #0A0A0E; border-bottom: 1px solid #1A1C24;
    display: flex; align-items: center; justify-content: space-between; padding: 0 20px;
  }}
  .main-split {{ flex: 1; display: flex; overflow: hidden; }}
  .sidebar {{
    width: 260px; background: #0A0B10; border-left: 1px solid #1A1C24;
    padding: 16px 12px; display: flex; flex-direction: column; justify-content: space-between;
  }}
  .sidebar-item {{
    padding: 10px 14px; border-radius: 8px; margin-bottom: 4px; font-size: 14px;
    display: flex; align-items: center; justify-content: space-between; color: #94A3B8; font-weight: 600;
  }}
  .sidebar-item.active {{
    background: #6D28D9; color: #FFFFFF; font-weight: 700;
  }}
  .content-area {{
    flex: 1; padding: 24px 32px; display: flex; flex-direction: column; gap: 20px;
  }}
  .kpi-grid {{
    display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px;
  }}
  .kpi-card {{
    background: #111218; border: 1px solid #1D202B; border-radius: 12px; padding: 18px 20px;
    position: relative; display: flex; flex-direction: column; justify-content: space-between; min-height: 145px;
  }}
  .kpi-title {{ font-size: 13px; color: #94A3B8; font-weight: 600; }}
  .kpi-value {{ font-size: 28px; font-weight: 800; color: #10B981; font-family: 'JetBrains Mono', sans-serif; }}
  .kpi-badge {{
    font-size: 11px; padding: 2px 10px; border-radius: 20px; width: fit-content; font-weight: 600;
  }}
</style>
</head>
<body>
  <div class="top-win-bar">
    <div style="display:flex; align-items:center; gap:16px;">
      <span style="font-size:16px; font-weight:800; letter-spacing:0.5px;">ALPHA LAB <span style="font-size:11px; color:#818CF8; font-weight:600; display:block;">MANAGEMENT SYSTEM</span></span>
      <span style="background:#F59E0B; width:10px; height:10px; border-radius:50%; display:inline-block;"></span>
    </div>
    <div style="display:flex; align-items:center; gap:12px;">
      <div style="background:#13151D; border:1px solid #232736; border-radius:8px; padding:6px 16px; color:#64748B; font-size:13px; width:340px;">
        🔍 بحث في الأطباء، المرضى، الفواتير...
      </div>
      <button class="btn-purple">+ تسجيل فاتورة</button>
      <button class="btn-dark" style="color:#C084FC;">📑 استخراج الفواتير</button>
    </div>
  </div>

  <div class="main-split">
    <!-- Main Content Area -->
    <div class="content-area">
      <!-- Title & Actions Bar -->
      <div style="display:flex; align-items:center; justify-content:space-between;">
        <div>
          <h1 style="font-size:24px; font-weight:800; color:#FFFFFF;">مختبر صناعة الاسنان</h1>
          <p style="font-size:13px; color:#64748B; margin-top:2px;">لوحة المؤشرات والتحليلات المالية والتشغيلية</p>
        </div>
        <div style="display:flex; gap:10px;">
          <button class="btn-purple">+ تسجيل فاتورة</button>
          <button class="btn-dark">💳 تسديدات حساب</button>
          <button class="btn-dark">📄 كشوفات وتقارير PDF</button>
          <button class="btn-dark">⚙️ تخصيص المؤشرات</button>
        </div>
      </div>

      <!-- 8 KPI Cards Grid -->
      <div class="kpi-grid">
        <div class="kpi-card">
          <div style="display:flex; justify-content:space-between;"><span class="kpi-title">إيرادات هذا الشهر</span><span>📈</span></div>
          <div class="kpi-value">0 د.ع</div>
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <span class="kpi-badge" style="background:#064E3B; color:#34D399;">الشهر الحالي</span>
            <span style="font-size:11px; color:#64748B;">0 سند قبض</span>
          </div>
        </div>

        <div class="kpi-card">
          <div style="display:flex; justify-content:space-between;"><span class="kpi-title">الفواتير والحالات المعلقة</span><span>⏱️</span></div>
          <div class="kpi-value" style="color:#FBBF24;">5 حالة</div>
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <span class="kpi-badge" style="background:#78350F; color:#FDE68A;">تتطلب متابعة</span>
            <span style="font-size:11px; color:#64748B;">المتبقي: 25,000 د.ع</span>
          </div>
        </div>

        <div class="kpi-card">
          <div style="display:flex; justify-content:space-between;"><span class="kpi-title">الأطباء غير النشطين</span><span>👥</span></div>
          <div class="kpi-value" style="color:#F87171;">4 طبيب</div>
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <span class="kpi-badge" style="background:#7F1D1D; color:#FECACA;">100% غير نشط</span>
            <span style="font-size:11px; color:#64748B;">من أصل 4 طبيب</span>
          </div>
        </div>

        <div class="kpi-card">
          <div style="display:flex; justify-content:space-between;"><span class="kpi-title">صافي الفواتير الصادرة</span><span>💼</span></div>
          <div class="kpi-value" style="color:#FFFFFF;">325,000 د.ع</div>
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <span class="kpi-badge" style="background:#312E81; color:#C7D2FE;">الصافي الإجمالي</span>
            <span style="font-size:11px; color:#64748B;">5 حالة مسجلة</span>
          </div>
        </div>

        <div class="kpi-card">
          <div style="display:flex; justify-content:space-between;"><span class="kpi-title">إجمالي المقبوضات النقدية</span><span>💳</span></div>
          <div class="kpi-value">0 د.ع</div>
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <span class="kpi-badge" style="background:#064E3B; color:#34D399;">مقبوضات مسددة</span>
            <span style="font-size:11px; color:#64748B;">عدد السندات: 0</span>
          </div>
        </div>

        <div class="kpi-card">
          <div style="display:flex; justify-content:space-between;"><span class="kpi-title">إجمالي الديون والمتبقي</span><span>🔄</span></div>
          <div class="kpi-value" style="color:#EF4444;">325,000 د.ع</div>
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <span class="kpi-badge" style="background:#7F1D1D; color:#FCA5A5;">مستحق للتحصيل</span>
            <span style="font-size:11px; color:#64748B;">بذمة الأطباء والعيادات</span>
          </div>
        </div>

        <div class="kpi-card">
          <div style="display:flex; justify-content:space-between;"><span class="kpi-title">إجمالي الخصومات الممنوحة</span><span>%</span></div>
          <div class="kpi-value" style="color:#C084FC;">0 د.ع</div>
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <span class="kpi-badge" style="background:#3B0764; color:#E9D5FF;">مخفض من الحساب</span>
            <span style="font-size:11px; color:#64748B;">0 خصم ممنوح</span>
          </div>
        </div>

        <div class="kpi-card">
          <div style="display:flex; justify-content:space-between;"><span class="kpi-title">الأطباء النشطون</span><span>👤</span></div>
          <div class="kpi-value" style="color:#60A5FA;">4 / 0</div>
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <span class="kpi-badge" style="background:#1E3A8A; color:#BFDBFE;">0% تفاعل</span>
            <span style="font-size:11px; color:#64748B;">4 متوقف</span>
          </div>
        </div>
      </div>

      <!-- Chart Container -->
      <div class="card" style="padding:16px 20px; flex:1; display:flex; flex-direction:column; justify-content:space-between;">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <div>
            <h3 style="font-size:15px; font-weight:700;">الأداء المالي الشهري (الفواتير مقابل المسدد)</h3>
            <span style="font-size:11px; color:#64748B;">مقارنة إجمالي قيمة الفواتير مع الدفعات المسددة للمختبر</span>
          </div>
          <div style="display:flex; gap:8px;">
            <button class="btn-dark" style="padding:4px 12px; font-size:11px;">آخر 12 شهراً</button>
            <button class="btn-dark" style="padding:4px 12px; font-size:11px; background:#6D28D9; color:white;">آخر 6 أشهر</button>
          </div>
        </div>

        <div style="display:grid; grid-template-columns: repeat(4, 1fr); gap:12px; padding:12px 0; border-top:1px solid #1E202A; margin-top:8px;">
          <div><span style="font-size:11px; color:#64748B; display:block;">عدد الحالات المسجلة:</span><span style="font-weight:700; font-size:14px;">0 حالة</span></div>
          <div><span style="font-size:11px; color:#64748B; display:block;">نسبة التحصيل للفترة:</span><span style="font-weight:700; font-size:14px;">0%</span></div>
          <div><span style="font-size:11px; color:#64748B; display:block;">إجمالي التحصيلات للفترة:</span><span style="font-weight:700; font-size:14px; color:#10B981;">0 د.ع</span></div>
          <div><span style="font-size:11px; color:#64748B; display:block;">إجمالي الفواتير للفترة:</span><span style="font-weight:700; font-size:14px;">0 د.ع</span></div>
        </div>
      </div>
    </div>

    <!-- Right Sidebar Menu -->
    <div class="sidebar">
      <div>
        <div style="padding:0 8px 16px; border-bottom:1px solid #1E202A; margin-bottom:12px;">
          <span style="font-weight:800; font-size:15px; color:#FFFFFF; display:block;">ALPHA LAB</span>
          <span style="font-size:10px; color:#64748B;">MANAGEMENT SYSTEM</span>
        </div>
        <div class="sidebar-item active"><span>القائمة الرئيسية</span><span>📊</span></div>
        <div class="sidebar-item"><span>الأطباء والحسابات</span><span>👨‍⚕️</span></div>
        <div class="sidebar-item"><span>الفواتير والحالات</span><span>📋</span></div>
        <div class="sidebar-item"><span>تسديدات حساب</span><span>💳</span></div>
        <div class="sidebar-item"><span>الخصومات والتخفيضات</span><span>%</span></div>
        <div class="sidebar-item"><span>استخراج الفواتير</span><span>🧾</span></div>
        <div style="font-size:11px; color:#475569; padding:8px 8px 4px; font-weight:700;">المندوبين والمبيعات</div>
        <div class="sidebar-item"><span>المندوبين</span><span>🚚</span></div>
        <div class="sidebar-item"><span>الفنيين</span><span>🛠️</span></div>
        <div style="font-size:11px; color:#475569; padding:8px 8px 4px; font-weight:700;">الإحصائيات والتحليلات</div>
        <div class="sidebar-item"><span>الإحصائيات والتحليلات</span><span>📈</span></div>
        <div class="sidebar-item"><span>كشوفات وتقارير PDF</span><span>📄</span></div>
      </div>
      <div style="border-top:1px solid #1E202A; padding-top:12px;">
        <div class="sidebar-item" style="font-size:12px;"><span>مدير المختبر (أدمن)</span><span>👤</span></div>
        <div class="sidebar-item" style="font-size:12px; color:#F59E0B;"><span>الشبكة والاتصال المحلي</span><span>🌐</span></div>
        <div class="sidebar-item" style="font-size:12px;"><span>إعدادات النظام</span><span>⚙️</span></div>
      </div>
    </div>
  </div>
</body>
</html>
"""

with open("/app/applet/tmp/a1.html", "w") as f:
    f.write(a1_html)

# -------------------------------------------------------------
# a2.png: Financial and Operational Dashboard Content (1920x960)
# -------------------------------------------------------------
a2_html = f"""<!DOCTYPE html>
<html>
<head>
{BASE_HEAD}
<style>
  body {{ width: 1920px; height: 960px; padding: 24px 40px; display: flex; flex-direction: column; gap: 24px; }}
  .kpi-grid {{ display: grid; grid-template-columns: repeat(4, 1fr); gap: 18px; }}
  .kpi-card {{
    background: #101116; border: 1px solid #1D202B; border-radius: 12px; padding: 20px 24px;
    display: flex; flex-direction: column; justify-content: space-between; min-height: 155px;
  }}
  .kpi-title {{ font-size: 14px; color: #94A3B8; font-weight: 600; }}
  .kpi-value {{ font-size: 32px; font-weight: 800; color: #10B981; font-family: 'JetBrains Mono', sans-serif; }}
  .kpi-badge {{ font-size: 11px; padding: 3px 12px; border-radius: 20px; width: fit-content; font-weight: 600; }}
</style>
</head>
<body>
  <!-- Title Bar -->
  <div style="display:flex; align-items:center; justify-content:space-between; padding-bottom:16px; border-bottom:1px solid #1A1C24;">
    <div>
      <h1 style="font-size:26px; font-weight:800; color:#FFFFFF;">lab</h1>
      <p style="font-size:14px; color:#64748B;">لوحة المؤشرات والتحليلات المالية والتشغيلية</p>
    </div>
    <div style="display:flex; gap:12px;">
      <button class="btn-purple">+ تسجيل فاتورة</button>
      <button class="btn-dark">💳 تسديدات حساب</button>
      <button class="btn-dark">📄 كشوفات وتقارير PDF</button>
      <button class="btn-dark">⚙️ تخصيص المؤشرات</button>
    </div>
  </div>

  <!-- 8 KPI Cards -->
  <div class="kpi-grid">
    <div class="kpi-card">
      <div style="display:flex; justify-content:space-between;"><span class="kpi-title">إيرادات هذا الشهر</span><span>📈</span></div>
      <div class="kpi-value">0 د.ع</div>
      <div style="display:flex; justify-content:space-between; align-items:center;">
        <span class="kpi-badge" style="background:#064E3B; color:#34D399;">الشهر الحالي</span>
        <span style="font-size:12px; color:#64748B;">0 سند قبض</span>
      </div>
    </div>

    <div class="kpi-card">
      <div style="display:flex; justify-content:space-between;"><span class="kpi-title">الفواتير والحالات المعلقة</span><span>⏱️</span></div>
      <div class="kpi-value" style="color:#FBBF24;">0 حالة</div>
      <div style="display:flex; justify-content:space-between; align-items:center;">
        <span class="kpi-badge" style="background:#064E3B; color:#34D399;">مسددة بالكامل</span>
        <span style="font-size:12px; color:#64748B;">المتبقي للتحصيل: 0 د.ع</span>
      </div>
    </div>

    <div class="kpi-card">
      <div style="display:flex; justify-content:space-between;"><span class="kpi-title">الأطباء غير النشطين</span><span>👥</span></div>
      <div class="kpi-value" style="color:#F87171;">1 طبيب</div>
      <div style="display:flex; justify-content:space-between; align-items:center;">
        <span class="kpi-badge" style="background:#7F1D1D; color:#FECACA;">100% غير نشط</span>
        <span style="font-size:12px; color:#64748B;">من أصل 1 طبيب</span>
      </div>
    </div>

    <div class="kpi-card">
      <div style="display:flex; justify-content:space-between;"><span class="kpi-title">صافي الفواتير الصادرة</span><span>💼</span></div>
      <div class="kpi-value" style="color:#FFFFFF;">0 د.ع</div>
      <div style="display:flex; justify-content:space-between; align-items:center;">
        <span class="kpi-badge" style="background:#312E81; color:#C7D2FE;">الصافي الإجمالي</span>
        <span style="font-size:12px; color:#64748B;">0 حالة مسجلة</span>
      </div>
    </div>

    <div class="kpi-card">
      <div style="display:flex; justify-content:space-between;"><span class="kpi-title">إجمالي المقبوضات النقدية</span><span>💳</span></div>
      <div class="kpi-value">0 د.ع</div>
      <div style="display:flex; justify-content:space-between; align-items:center;">
        <span class="kpi-badge" style="background:#064E3B; color:#34D399;">مقبوضات مسددة</span>
        <span style="font-size:12px; color:#64748B;">عدد السندات: 0</span>
      </div>
    </div>

    <div class="kpi-card">
      <div style="display:flex; justify-content:space-between;"><span class="kpi-title">إجمالي الديون والمتبقي</span><span>🔄</span></div>
      <div class="kpi-value" style="color:#F87171;">0 د.ع</div>
      <div style="display:flex; justify-content:space-between; align-items:center;">
        <span class="kpi-badge" style="background:#064E3B; color:#34D399;">تمت التصفية</span>
        <span style="font-size:12px; color:#64748B;">رصيد صفر</span>
      </div>
    </div>

    <div class="kpi-card">
      <div style="display:flex; justify-content:space-between;"><span class="kpi-title">إجمالي الخصومات الممنوحة</span><span>%</span></div>
      <div class="kpi-value" style="color:#C084FC;">0 د.ع</div>
      <div style="display:flex; justify-content:space-between; align-items:center;">
        <span class="kpi-badge" style="background:#3B0764; color:#E9D5FF;">مخفض من الحساب</span>
        <span style="font-size:12px; color:#64748B;">0 خصم ممنوح</span>
      </div>
    </div>

    <div class="kpi-card">
      <div style="display:flex; justify-content:space-between;"><span class="kpi-title">الأطباء النشطون</span><span>👤</span></div>
      <div class="kpi-value" style="color:#60A5FA;">1 / 0</div>
      <div style="display:flex; justify-content:space-between; align-items:center;">
        <span class="kpi-badge" style="background:#1E3A8A; color:#BFDBFE;">0% تفاعل</span>
        <span style="font-size:12px; color:#64748B;">1 متوقف</span>
      </div>
    </div>
  </div>

  <!-- Bottom Monthly Performance Container -->
  <div class="card" style="padding:24px 32px; flex:1; display:flex; flex-direction:column; justify-content:space-between;">
    <div style="display:flex; justify-content:space-between; align-items:center;">
      <div>
        <h3 style="font-size:18px; font-weight:800;">الأداء المالي الشهري (الفواتير مقابل المسدد)</h3>
        <span style="font-size:13px; color:#64748B;">مقارنة إجمالي قيمة الفواتير مع الدفعات المسددة للمختبر (lab)</span>
      </div>
      <div style="display:flex; gap:10px;">
        <button class="btn-dark">آخر 12 شهراً</button>
        <button class="btn-dark" style="background:#6D28D9; color:white;">آخر 6 أشهر</button>
      </div>
    </div>

    <div style="display:grid; grid-template-columns: repeat(4, 1fr); gap:16px; padding-top:20px; border-top:1px solid #1E202A;">
      <div><span style="font-size:12px; color:#64748B; display:block;">إجمالي الفواتير للفترة:</span><span style="font-weight:700; font-size:16px; font-family:'JetBrains Mono';">0 د.ع</span></div>
      <div><span style="font-size:12px; color:#64748B; display:block;">إجمالي التحصيلات للفترة:</span><span style="font-weight:700; font-size:16px; color:#10B981; font-family:'JetBrains Mono';">0 د.ع</span></div>
      <div><span style="font-size:12px; color:#64748B; display:block;">نسبة التحصيل للفترة:</span><span style="font-weight:700; font-size:16px; font-family:'JetBrains Mono';">0%</span></div>
      <div><span style="font-size:12px; color:#64748B; display:block;">عدد الحالات المسجلة:</span><span style="font-weight:700; font-size:16px; font-family:'JetBrains Mono';">0 حالة</span></div>
    </div>

    <div style="display:flex; gap:24px; font-size:13px; color:#94A3B8; justify-content:center; padding-top:16px;">
      <span style="display:flex; align-items:center; gap:6px;"><span style="width:12px; height:12px; background:#2563EB; display:inline-block; border-radius:2px;"></span> إجمالي الفواتير الصافية (د.ع)</span>
      <span style="display:flex; align-items:center; gap:6px;"><span style="width:12px; height:12px; background:#10B981; display:inline-block; border-radius:2px;"></span> الدفعات المستلمة (د.ع)</span>
    </div>
  </div>
</body>
</html>
"""

with open("/app/applet/tmp/a2.html", "w") as f:
    f.write(a2_html)

# -------------------------------------------------------------
# a3.png: Invoice Registration Window Modal (1920x960)
# -------------------------------------------------------------
a3_html = f"""<!DOCTYPE html>
<html>
<head>
{BASE_HEAD}
<style>
  body {{
    width: 1920px; height: 960px; background: #0A0A0F;
    display: flex; align-items: center; justify-content: center; padding: 24px;
  }}
  .modal-window {{
    width: 1840px; height: 900px; background: #0D0E14; border: 1px solid #242735;
    border-radius: 16px; display: flex; flex-direction: column; overflow: hidden;
  }}
  .modal-top {{
    padding: 16px 28px; background: #11131C; border-bottom: 1px solid #1E212E;
    display: flex; align-items: center; justify-content: space-between;
  }}
  .modal-body {{
    flex: 1; display: flex; padding: 28px 36px; gap: 36px;
  }}
  .calc-side {{
    width: 440px; background: #12141E; border: 1px solid #232738; border-radius: 14px;
    padding: 24px; display: flex; flex-direction: column; justify-content: space-between;
  }}
  .form-side {{
    flex: 1; display: flex; flex-direction: column; gap: 20px;
  }}
  .input-box {{
    background: #151722; border: 1px solid #282C3D; border-radius: 8px;
    padding: 12px 16px; color: #FFFFFF; font-size: 14px; width: 100%;
  }}
  .tooth-chip {{
    background: #181A25; border: 1px solid #282C3E; border-radius: 6px;
    padding: 8px 14px; font-family: 'JetBrains Mono'; font-size: 14px; font-weight: 700;
  }}
  .stage-chip {{
    padding: 10px 18px; border-radius: 8px; font-size: 13px; font-weight: 700;
    border: 1px solid #282C3E; background: #151722; color: #CBD5E1;
  }}
  .stage-chip.active {{
    background: #1E293B; border-color: #3B82F6; color: #60A5FA;
  }}
</style>
</head>
<body>
  <div class="modal-window">
    <div class="modal-top">
      <div style="display:flex; align-items:center; gap:12px;">
        <span style="font-size:20px; font-weight:800; color:#FFFFFF;">تسجيل فاتورة جديدة</span>
        <span style="background:#5B21B6; color:#E9D5FF; font-family:'JetBrains Mono'; font-size:12px; font-weight:700; padding:3px 10px; border-radius:6px;">#A00006</span>
        <span style="color:#64748B; font-size:13px; margin-right:12px;">إدخال تفاصيل الحالة وتطبيق قائمة أسعار الطبيب واحتساب المستحقات آلياً</span>
      </div>
      <div style="display:flex; align-items:center; gap:16px;">
        <span style="font-size:12px; color:#64748B;">⏱️ حفظ تلقائي (30ث)</span>
        <span style="font-size:18px; color:#94A3B8; cursor:pointer;">✕</span>
      </div>
    </div>

    <div class="modal-body">
      <!-- Left Calculation Panel -->
      <div class="calc-side">
        <div>
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px;">
            <div>
              <h3 style="font-size:16px; font-weight:800; color:#FFFFFF;">الاحتساب المالي التلقائي</h3>
              <span style="font-size:12px; color:#64748B;">وفق اتفاقية أسعار المختبر</span>
            </div>
            <span style="background:#1E293B; color:#93C5FD; font-size:11px; padding:4px 8px; border-radius:4px; font-weight:700;">السعر القياسي</span>
          </div>

          <div style="display:flex; flex-direction:column; gap:14px; font-size:13px; color:#94A3B8; border-bottom:1px solid #202434; padding-bottom:18px;">
            <div style="display:flex; justify-content:space-between;"><span>سعر الوحدة قبل الخصم:</span><span style="font-weight:700; color:#FFFFFF;">0 د.ع</span></div>
            <div style="display:flex; justify-content:space-between;"><span>سعر الوحدة بعد الخصم المعتمد:</span><span style="font-weight:700; color:#FFFFFF;">0 د.ع</span></div>
            <div style="display:flex; justify-content:space-between;"><span>إجمالي الحساب قبل الخصم:</span><span style="font-weight:700; color:#FFFFFF;">1 × 0 د.ع = 0 د.ع</span></div>
          </div>

          <!-- Highlight Total Box -->
          <div style="background:#2563EB; border-radius:12px; padding:20px; color:white; margin-top:20px;">
            <span style="font-size:13px; opacity:0.9; display:block;">المبلغ الصافي المطلوب (Net Total):</span>
            <span style="font-size:36px; font-weight:800; font-family:'JetBrains Mono'; display:block; margin:6px 0;">0 د.ع</span>
            <span style="font-size:12px; opacity:0.85;">1 وحدات • بدون تحديد (نهائي مسلم)</span>
          </div>
        </div>

        <div style="display:flex; flex-direction:column; gap:10px;">
          <button class="btn-purple" style="width:100%; justify-content:center; padding:14px; font-size:16px;">✓ تسجيل وحفظ الفاتورة</button>
          <div style="display:flex; gap:10px;">
            <button class="btn-dark" style="flex:1; padding:10px;">💾 حفظ كمسودة</button>
            <button class="btn-dark" style="padding:10px 20px; color:#EF4444;">إلغاء</button>
          </div>
          <span style="font-size:11px; color:#64748B; text-align:center;">اختصار لوحة المفاتيح: Ctrl + Enter للحفظ السريع</span>
        </div>
      </div>

      <!-- Right Form Details -->
      <div class="form-side">
        <div style="display:grid; grid-template-columns: 1fr 1fr; gap:20px;">
          <div>
            <label style="font-size:13px; font-weight:700; color:#CBD5E1; display:block; margin-bottom:8px;">الطبيب / العيادة <span style="color:#EF4444;">*</span></label>
            <div class="input-box" style="display:flex; justify-content:space-between; align-items:center;">
              <span>د. دكتور احمد (بغداد)</span>
              <span style="color:#64748B;">▼</span>
            </div>
          </div>
          <div>
            <label style="font-size:13px; font-weight:700; color:#CBD5E1; display:block; margin-bottom:8px;">اسم المريض الكامل <span style="color:#EF4444;">*</span></label>
            <div class="input-box" style="color:#64748B;">مثال: محمد علي حسن</div>
          </div>
        </div>

        <div>
          <label style="font-size:13px; font-weight:700; color:#CBD5E1; display:block; margin-bottom:8px;">نوع العمل / التركيبة <span style="color:#EF4444;">*</span></label>
          <div class="input-box" style="display:flex; justify-content:space-between; align-items:center;">
            <span>اختر نوع العمل...</span>
            <span style="color:#64748B;">▼</span>
          </div>
        </div>

        <!-- Tooth Selection -->
        <div>
          <label style="font-size:13px; font-weight:700; color:#CBD5E1; display:block; margin-bottom:8px;">عدد الوحدات (Units) • تحديد الأسنان</label>
          <div style="display:flex; gap:8px;">
            <span class="tooth-chip" style="background:#6D28D9; border-color:#8B5CF6; color:white;">1</span>
            <span class="tooth-chip">2</span>
            <span class="tooth-chip">3</span>
            <span class="tooth-chip">4</span>
            <span class="tooth-chip">6</span>
            <span class="tooth-chip">8</span>
            <span class="tooth-chip">12</span>
            <span class="tooth-chip">14</span>
            <span class="tooth-chip">28</span>
          </div>
        </div>

        <!-- Production Stage -->
        <div>
          <label style="font-size:13px; font-weight:700; color:#CBD5E1; display:block; margin-bottom:8px;">حالة العمل والإنتاج <span style="color:#EF4444;">*</span></label>
          <div style="display:flex; gap:12px;">
            <span class="stage-chip active">● نهائي (مسلم)</span>
            <span class="stage-chip">تجربة (Check)</span>
            <span class="stage-chip">فحص معدن</span>
            <span class="stage-chip">إعادة عمل (Remake)</span>
            <span class="stage-chip">تصليح (Repair)</span>
          </div>
        </div>

        <div>
          <label style="font-size:13px; font-weight:700; color:#CBD5E1; display:block; margin-bottom:8px;">الفنيون المسؤولون عن الحالة (Technicians)</label>
          <div class="input-box" style="color:#64748B;">انقر لتحديد الفني / الفنيين المسؤولين عن هذه الحالة...</div>
        </div>

        <div style="display:grid; grid-template-columns: 2fr 1fr; gap:20px;">
          <div>
            <label style="font-size:13px; font-weight:700; color:#CBD5E1; display:block; margin-bottom:8px;">ملاحظات إضافية (اللون، التعليمات)</label>
            <div class="input-box" style="color:#64748B;">مثال: لون A2، جسر علوي، عاجل...</div>
          </div>
          <div>
            <label style="font-size:13px; font-weight:700; color:#CBD5E1; display:block; margin-bottom:8px;">تاريخ استلام الحالة</label>
            <div class="input-box" style="font-family:'JetBrains Mono';">10/15/2026 📅</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>
"""

with open("/app/applet/tmp/a3.html", "w") as f:
    f.write(a3_html)

# -------------------------------------------------------------
# a4.png: Doctors Accounts and Cases Statement Window (1920x1080)
# -------------------------------------------------------------
a4_html = f"""<!DOCTYPE html>
<html>
<head>
{BASE_HEAD}
<style>
  body {{ width: 1920px; height: 1080px; padding: 24px 40px; display: flex; flex-direction: column; gap: 20px; }}
  .doctor-header {{
    background: #0E1018; border: 1px solid #1F2232; border-radius: 14px; padding: 20px 28px;
    display: flex; align-items: center; justify-content: space-between;
  }}
  .summary-grid {{ display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }}
  .summary-card {{
    background: #11131C; border: 1px solid #202436; border-radius: 12px; padding: 18px 24px;
  }}
  .tabs-bar {{
    display: flex; gap: 8px; border-bottom: 1px solid #1E212E; padding-bottom: 2px;
  }}
  .tab-btn {{
    padding: 10px 20px; font-weight: 700; font-size: 14px; border-radius: 8px 8px 0 0; color: #94A3B8;
  }}
  .tab-btn.active {{
    background: #161824; color: #C084FC; border-bottom: 2px solid #8B5CF6;
  }}
</style>
</head>
<body>
  <div style="display:flex; justify-content:space-between; align-items:center;">
    <div style="display:flex; align-items:center; gap:16px;">
      <div style="width:48px; height:48px; border-radius:50%; background:#2E1065; color:#C084FC; display:flex; align-items:center; justify-content:center; font-size:22px; font-weight:800;">د</div>
      <div>
        <div style="display:flex; align-items:center; gap:12px;">
          <h1 style="font-size:22px; font-weight:800; color:#FFFFFF;">د. دكتور احمد</h1>
          <span style="background:#064E3B; color:#34D399; font-size:11px; font-weight:700; padding:2px 10px; border-radius:12px;">الأطباء النشطون</span>
          <span style="background:#78350F; color:#FDE68A; font-size:11px; font-weight:700; padding:2px 10px; border-radius:12px;">Doc Inactive Since 999 day</span>
        </div>
        <span style="font-size:12px; color:#64748B; margin-top:4px; display:block;">📍 المنطقة / المحافظة: بغداد</span>
      </div>
    </div>
    <div style="display:flex; gap:10px;">
      <button class="btn-purple">$ أسعار مخصصة</button>
      <button class="btn-dark">تعديل</button>
      <button class="btn-dark" style="color:#EF4444;">🗑️ أرشفة أو حذف</button>
      <button class="btn-dark" style="background:#047857; color:white;">📥 تصدير PDF</button>
      <button class="btn-dark">🖨️ طباعة كشف الحساب</button>
      <span style="font-size:20px; color:#64748B; cursor:pointer; margin-right:8px;">✕</span>
    </div>
  </div>

  <!-- 4 Summary Cards -->
  <div class="summary-grid">
    <div class="summary-card">
      <span style="font-size:12px; color:#94A3B8;">صافي الفواتير</span>
      <span style="font-size:26px; font-weight:800; display:block; margin:6px 0; font-family:'JetBrains Mono';">0 د.ع</span>
      <span style="font-size:11px; color:#64748B;">قبل الخصم: 0 د.ع</span>
    </div>

    <div class="summary-card">
      <span style="font-size:12px; color:#94A3B8;">مجموع الخصومات الممنوحة</span>
      <span style="font-size:26px; font-weight:800; color:#FBBF24; display:block; margin:6px 0; font-family:'JetBrains Mono';">0 د.ع</span>
      <span style="font-size:11px; color:#64748B;">0 خصم ممنوح</span>
    </div>

    <div class="summary-card">
      <span style="font-size:12px; color:#94A3B8;">المبلغ المسدد</span>
      <span style="font-size:26px; font-weight:800; color:#34D399; display:block; margin:6px 0; font-family:'JetBrains Mono';">0 د.ع</span>
      <span style="font-size:11px; color:#64748B;">0 وصل قبض</span>
    </div>

    <div class="summary-card" style="border-color:#831843;">
      <span style="font-size:12px; color:#F472B6;">الرصيد المتبقي</span>
      <span style="font-size:26px; font-weight:800; color:#F43F5E; display:block; margin:6px 0; font-family:'JetBrains Mono';">0 د.ع</span>
      <span style="font-size:11px; color:#9F1239;">مستحقات المختبر</span>
    </div>
  </div>

  <!-- Tabs Navigation -->
  <div class="tabs-bar">
    <div class="tab-btn active">الفواتير والحالات (0)</div>
    <div class="tab-btn">تسديدات حساب (0)</div>
    <div class="tab-btn">الخصومات والتخفيضات (0)</div>
    <div class="tab-btn">🏷️ أسعار مخصصة</div>
    <div class="tab-btn">💬 الملاحظات والتفضيلات</div>
  </div>

  <!-- Table View / Search Bar -->
  <div class="card" style="flex:1; padding:20px; display:flex; flex-direction:column; justify-content:space-between;">
    <div style="display:flex; justify-content:space-between; align-items:center;">
      <div style="background:#151722; border:1px solid #232736; border-radius:8px; padding:10px 16px; color:#64748B; font-size:13px; width:500px;">
        🔍 بحث في الفواتير (اسم المريض، نوع العمل، التاريخ، الحالة...)
      </div>
      <div style="display:flex; gap:12px; align-items:center;">
        <span style="font-size:12px; color:#64748B; font-family:'JetBrains Mono';">المعروض: 0 / 0</span>
        <button class="btn-purple">+ فاتورة جديدة</button>
      </div>
    </div>

    <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; flex:1; gap:12px; opacity:0.6;">
      <span style="font-size:36px;">🧾</span>
      <p style="font-size:14px; color:#94A3B8;">لا توجد فواتير مطابقة لمعايير البحث</p>
    </div>
  </div>
</body>
</html>
"""

with open("/app/applet/tmp/a4.html", "w") as f:
    f.write(a4_html)

# -------------------------------------------------------------
# a5.png: Technicians and Laboratory Team (1920x960)
# -------------------------------------------------------------
a5_html = f"""<!DOCTYPE html>
<html>
<head>
{BASE_HEAD}
<style>
  body {{ width: 1920px; height: 960px; padding: 24px 40px; display: flex; flex-direction: column; gap: 20px; }}
  .kpi-strip {{ display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }}
  .tech-card {{
    background: #11131C; border: 1px solid #202436; border-radius: 14px; padding: 20px;
    display: flex; flex-direction: column; justify-content: space-between; min-height: 380px;
  }}
</style>
</head>
<body>
  <!-- Header -->
  <div style="display:flex; justify-content:space-between; align-items:center; padding-bottom:12px; border-bottom:1px solid #1E212E;">
    <div style="display:flex; align-items:center; gap:14px;">
      <div style="background:#2563EB; width:44px; height:44px; border-radius:10px; display:flex; align-items:center; justify-content:center; font-size:22px;">🛠️</div>
      <div>
        <div style="display:flex; align-items:center; gap:10px;">
          <h1 style="font-size:22px; font-weight:800; color:#FFFFFF;">كادر وفنيو المختبر</h1>
          <span style="background:#312E81; color:#C7D2FE; font-size:12px; font-weight:700; padding:2px 10px; border-radius:12px;">3 فني نشط</span>
        </div>
        <span style="font-size:12px; color:#64748B;">إدارة كادر صناعة الأسنان، متابعة الحالات وتوزيع المهام، ورصد الإنتاجية وسرعة الإنجاز</span>
      </div>
    </div>
    <div style="display:flex; gap:12px;">
      <button class="btn-dark">👥 دليل الفنيين</button>
      <button class="btn-dark">🏆 مؤشرات الأداء والترتيب</button>
      <button class="btn-purple">+ إضافة فني جديد</button>
    </div>
  </div>

  <!-- 4 Overview KPIs -->
  <div class="kpi-strip">
    <div class="card" style="padding:16px 20px; display:flex; justify-content:space-between; align-items:center;">
      <div><span style="font-size:12px; color:#94A3B8;">الفنيون النشطون</span><span style="font-size:24px; font-weight:800; display:block;">3 فني</span><span style="font-size:11px; color:#64748B;">من إجمالي 3 مسجلين</span></div>
      <span style="font-size:24px;">👤</span>
    </div>
    <div class="card" style="padding:16px 20px; display:flex; justify-content:space-between; align-items:center;">
      <div><span style="font-size:12px; color:#94A3B8;">الحالات المسندة حالياً</span><span style="font-size:24px; font-weight:800; color:#60A5FA; display:block;">0 حالة</span><span style="font-size:11px; color:#64748B;">موزعة على كادر المختبر</span></div>
      <span style="font-size:24px;">📋</span>
    </div>
    <div class="card" style="padding:16px 20px; display:flex; justify-content:space-between; align-items:center;">
      <div><span style="font-size:12px; color:#94A3B8;">معدل سرعة الإنجاز</span><span style="font-size:24px; font-weight:800; color:#34D399; display:block;">— يوم / حالة</span><span style="font-size:11px; color:#64748B;">بانتظار اكتمال أول حالة</span></div>
      <span style="font-size:24px;">⏱️</span>
    </div>
    <div class="card" style="padding:16px 20px; display:flex; justify-content:space-between; align-items:center;">
      <div><span style="font-size:12px; color:#94A3B8;">مؤشر الإنتاجية العام</span><span style="font-size:24px; font-weight:800; color:#FBBF24; display:block;">— جاهز</span><span style="font-size:11px; color:#64748B;">تقييم كفاءة تسليم العمل</span></div>
      <span style="font-size:24px;">⚡</span>
    </div>
  </div>

  <!-- Search & Filter bar -->
  <div style="display:flex; justify-content:space-between; align-items:center;">
    <div style="background:#13151F; border:1px solid #232736; border-radius:8px; padding:8px 16px; color:#64748B; font-size:13px; width:450px;">
      🔍 ابحث باسم الفني، الاختصاص، رقم الهاتف، أو الملاحظات...
    </div>
    <div style="display:flex; gap:8px;">
      <span class="btn-dark" style="background:#6D28D9; color:white;">كافة الاختصاصات</span>
      <span class="btn-dark">زركون (Zirconia)</span>
      <span class="btn-dark">سيراميك وفينير (Ceramics / Emax)</span>
    </div>
  </div>

  <!-- 3 Technicians Cards -->
  <div style="display:grid; grid-template-columns: repeat(3, 1fr); gap:20px; flex:1;">
    <!-- Tech 1 -->
    <div class="tech-card">
      <div style="display:flex; justify-content:space-between; align-items:flex-start;">
        <div style="display:flex; gap:12px; align-items:center;">
          <div style="width:44px; height:44px; border-radius:10px; background:#D97706; color:white; font-weight:800; display:flex; align-items:center; justify-content:center; font-size:16px;">مم</div>
          <div>
            <h3 style="font-size:16px; font-weight:800; color:#FFFFFF;">محمد منعم</h3>
            <span style="font-size:12px; color:#94A3B8;">سيراميك وفينير (Ceramics / Emax)</span>
          </div>
        </div>
        <span style="color:#64748B;">⋮</span>
      </div>

      <div style="display:grid; grid-template-columns: repeat(3, 1fr); gap:8px; margin:20px 0; text-align:center;">
        <div style="background:#161925; padding:12px; border-radius:8px;"><span style="font-size:11px; color:#64748B; display:block;">إجمالي الحالات</span><span style="font-weight:800; font-size:18px;">0</span></div>
        <div style="background:#064E3B; padding:12px; border-radius:8px;"><span style="font-size:11px; color:#34D399; display:block;">مكتملة</span><span style="font-weight:800; font-size:18px; color:#34D399;">0</span></div>
        <div style="background:#161925; padding:12px; border-radius:8px;"><span style="font-size:11px; color:#64748B; display:block;">قيد العمل</span><span style="font-weight:800; font-size:18px;">0</span></div>
      </div>

      <button class="btn-dark" style="width:100%; justify-content:center; padding:10px;">⇅ عرض وترتيب حالات الفني (0)</button>
    </div>

    <!-- Tech 2 -->
    <div class="tech-card">
      <div style="display:flex; justify-content:space-between; align-items:flex-start;">
        <div style="display:flex; gap:12px; align-items:center;">
          <div style="width:44px; height:44px; border-radius:10px; background:#059669; color:white; font-weight:800; display:flex; align-items:center; justify-content:center; font-size:16px;">عس</div>
          <div>
            <h3 style="font-size:16px; font-weight:800; color:#FFFFFF;">علي سمير</h3>
            <span style="font-size:12px; color:#94A3B8;">زركون (Zirconia)</span>
          </div>
        </div>
        <span style="color:#64748B;">⋮</span>
      </div>

      <div style="display:grid; grid-template-columns: repeat(3, 1fr); gap:8px; margin:20px 0; text-align:center;">
        <div style="background:#161925; padding:12px; border-radius:8px;"><span style="font-size:11px; color:#64748B; display:block;">إجمالي الحالات</span><span style="font-weight:800; font-size:18px;">0</span></div>
        <div style="background:#064E3B; padding:12px; border-radius:8px;"><span style="font-size:11px; color:#34D399; display:block;">مكتملة</span><span style="font-weight:800; font-size:18px; color:#34D399;">0</span></div>
        <div style="background:#161925; padding:12px; border-radius:8px;"><span style="font-size:11px; color:#64748B; display:block;">قيد العمل</span><span style="font-weight:800; font-size:18px;">0</span></div>
      </div>

      <button class="btn-dark" style="width:100%; justify-content:center; padding:10px;">⇅ عرض وترتيب حالات الفني (0)</button>
    </div>

    <!-- Tech 3 -->
    <div class="tech-card">
      <div style="display:flex; justify-content:space-between; align-items:flex-start;">
        <div style="display:flex; gap:12px; align-items:center;">
          <div style="width:44px; height:44px; border-radius:10px; background:#2563EB; color:white; font-weight:800; display:flex; align-items:center; justify-content:center; font-size:16px;">اج</div>
          <div>
            <h3 style="font-size:16px; font-weight:800; color:#FFFFFF;">احمد جمال</h3>
            <span style="font-size:12px; color:#94A3B8;">زركون (Zirconia)</span>
          </div>
        </div>
        <span style="color:#64748B;">⋮</span>
      </div>

      <div style="display:grid; grid-template-columns: repeat(3, 1fr); gap:8px; margin:20px 0; text-align:center;">
        <div style="background:#161925; padding:12px; border-radius:8px;"><span style="font-size:11px; color:#64748B; display:block;">إجمالي الحالات</span><span style="font-weight:800; font-size:18px;">0</span></div>
        <div style="background:#064E3B; padding:12px; border-radius:8px;"><span style="font-size:11px; color:#34D399; display:block;">مكتملة</span><span style="font-weight:800; font-size:18px; color:#34D399;">0</span></div>
        <div style="background:#161925; padding:12px; border-radius:8px;"><span style="font-size:11px; color:#64748B; display:block;">قيد العمل</span><span style="font-weight:800; font-size:18px;">0</span></div>
      </div>

      <button class="btn-dark" style="width:100%; justify-content:center; padding:10px;">⇅ عرض وترتيب حالات الفني (0)</button>
    </div>
  </div>
</body>
</html>
"""

with open("/app/applet/tmp/a5.html", "w") as f:
    f.write(a5_html)

# -------------------------------------------------------------
# a6.png: Account Statements and Report Printing (1920x960)
# -------------------------------------------------------------
a6_html = f"""<!DOCTYPE html>
<html>
<head>
{BASE_HEAD}
<style>
  body {{ width: 1920px; height: 960px; padding: 24px 40px; display: flex; flex-direction: column; gap: 16px; }}
</style>
</head>
<body>
  <div style="display:flex; justify-content:space-between; align-items:center; padding-bottom:12px; border-bottom:1px solid #1E212E;">
    <div style="display:flex; align-items:center; gap:12px;">
      <span style="font-size:24px;">📄</span>
      <div>
        <h1 style="font-size:20px; font-weight:800; color:#FFFFFF;">نظام كشوفات الحسابات وال PDF (Themes & Statements)</h1>
        <span style="font-size:12px; color:#64748B;">تخصيص الشعار، اختيار نمط وثيم الكشف، المعاينة الحية، والتصدير المباشر كملف PDF عالي الدقة</span>
      </div>
    </div>
    <div style="display:flex; gap:10px;">
      <button class="btn-dark">👁️ معاينة كاملة</button>
      <button class="btn-dark" style="background:#047857; color:white;">📥 تصدير PDF</button>
      <button class="btn-purple">🖨️ معاينة / طباعة</button>
    </div>
  </div>

  <!-- Theme selector bar -->
  <div style="display:flex; justify-content:space-between; align-items:center; background:#12141F; border:1px solid #202436; border-radius:10px; padding:10px 18px;">
    <div style="display:flex; gap:10px; align-items:center;">
      <span style="font-size:13px; font-weight:700;">الثيم النشط حالياً:</span>
      <button class="btn-dark" style="background:#6D28D9; color:white; padding:4px 14px;">المالي المكثف (Compact Financial)</button>
      <button class="btn-dark" style="padding:4px 14px;">الرسمي</button>
      <button class="btn-dark" style="padding:4px 14px;">الاحترافي</button>
      <button class="btn-dark" style="padding:4px 14px;">جداول</button>
      <button class="btn-dark" style="padding:4px 14px;">مينيمال</button>
    </div>
    <div style="display:flex; gap:12px;">
      <span class="btn-dark" style="font-size:12px;">اختر الطبيب: د. دكتور احمد (بغداد) ▼</span>
    </div>
  </div>

  <!-- Statement Sheet Preview (White Paper Inside Dark Environment) -->
  <div style="flex:1; background:#0B0C12; border:1px solid #1E212E; border-radius:12px; padding:20px; display:flex; justify-content:center; overflow:hidden;">
    <div style="width:1050px; background:white; color:#0F172A; border-radius:6px; box-shadow:0 10px 30px rgba(0,0,0,0.8); padding:32px; font-size:12px; display:flex; flex-direction:column; justify-content:space-between;">
      <div>
        <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:2px solid #0F172A; padding-bottom:14px; margin-bottom:14px;">
          <div>
            <h2 style="font-size:18px; font-weight:800; color:#0F172A;">كشف حساب الطبيب: د. دكتور احمد</h2>
            <span style="font-size:11px; color:#475569;">ثيم الحسابات المكثف • مختبر صناعة الاسنان</span>
          </div>
          <div style="text-align:left;">
            <span style="font-size:20px; font-weight:900; letter-spacing:1px; display:block;">ALPHA LAB</span>
            <span style="font-size:10px; color:#64748B;">DENTAL LABORATORY</span>
          </div>
        </div>

        <div style="display:flex; justify-content:space-between; background:#F8FAFC; padding:10px 14px; border-radius:6px; border:1px solid #E2E8F0; margin-bottom:16px;">
          <div><span style="color:#64748B;">الطبيب:</span> <strong>د. دكتور احمد (بغداد)</strong></div>
          <div><span style="color:#64748B;">الفترة:</span> <strong>Start → Now</strong></div>
          <div><span style="color:#64748B;">التاريخ:</span> <strong>10-15-2026</strong></div>
        </div>

        <table style="width:100%; border-collapse:collapse; margin-bottom:16px;">
          <thead>
            <tr style="background:#F1F5F9; border-bottom:2px solid #CBD5E1; font-weight:700; color:#334155; font-size:11px;">
              <th style="padding:8px; text-align:right;">#</th>
              <th style="padding:8px; text-align:right;">التاريخ</th>
              <th style="padding:8px; text-align:right;">المريض</th>
              <th style="padding:8px; text-align:right;">العمل</th>
              <th style="padding:8px; text-align:center;">العدد</th>
              <th style="padding:8px; text-align:left;">السعر</th>
              <th style="padding:8px; text-align:left;">الخصم</th>
              <th style="padding:8px; text-align:left;">الصافي</th>
              <th style="padding:8px; text-align:center;">الحالة</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-bottom:1px solid #E2E8F0; color:#64748B; text-align:center;">
              <td colspan="9" style="padding:28px;">لا توجد فواتير مسجلة في هذا الكشف</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div style="display:flex; justify-content:space-between; border-top:2px solid #0F172A; padding-top:12px;">
        <span style="color:#64748B; font-size:11px;">صفحة 1 من 1 • تم استخراج الكشف آلياً بواسطة Alpha Lab Management System</span>
        <strong style="font-size:14px; color:#0F172A;">الرصيد النهائي المستحق: 0 د.ع</strong>
      </div>
    </div>
  </div>
</body>
</html>
"""

with open("/app/applet/tmp/a6.html", "w") as f:
    f.write(a6_html)

# -------------------------------------------------------------
# a7.png: Statistics and Analytics Interface (1920x960)
# -------------------------------------------------------------
a7_html = f"""<!DOCTYPE html>
<html>
<head>
{BASE_HEAD}
<style>
  body {{ width: 1920px; height: 960px; padding: 24px 40px; display: flex; flex-direction: column; gap: 20px; }}
  .kpi-row {{ display: grid; grid-template-columns: repeat(4, 1fr); gap: 18px; }}
  .chart-box {{
    background: #101117; border: 1px solid #1E212E; border-radius: 14px; padding: 24px 32px;
    flex: 1; display: flex; flex-direction: column; justify-content: space-between;
  }}
</style>
</head>
<body>
  <div style="display:flex; justify-content:space-between; align-items:center; padding-bottom:12px; border-bottom:1px solid #1E212E;">
    <div style="display:flex; align-items:center; gap:12px;">
      <span style="font-size:24px;">📊</span>
      <div>
        <h1 style="font-size:22px; font-weight:800; color:#FFFFFF;">الإحصائيات والتحليلات المالية للمختبر</h1>
        <span style="font-size:12px; color:#64748B;">تحليل مالي وتشغيلي متكامل لصافي الفواتير، الديون المعلقة، حسابات الأطباء، وعمولات المندوبين</span>
      </div>
    </div>
    <div style="display:flex; gap:10px;">
      <button class="btn-dark" style="background:#6D28D9; color:white;">كافة الفترات</button>
      <button class="btn-dark">هذا الشهر</button>
      <button class="btn-dark">هذا العام</button>
      <button class="btn-dark">تاريخ مخصص</button>
      <button class="btn-dark" style="background:#047857; color:white;">📥 تصدير PDF</button>
    </div>
  </div>

  <!-- 4 Stats Cards -->
  <div class="kpi-row">
    <div class="card" style="padding:18px 22px;">
      <span style="font-size:13px; color:#94A3B8;">إجمالي الفواتير الصادرة</span>
      <span style="font-size:28px; font-weight:800; color:white; display:block; margin:6px 0; font-family:'JetBrains Mono';">0 د.ع</span>
      <span style="font-size:11px; color:#64748B;">0 حالة مسجلة • 0 د.ع خصومات</span>
    </div>
    <div class="card" style="padding:18px 22px;">
      <span style="font-size:13px; color:#94A3B8;">صافي فواتير المختبر</span>
      <span style="font-size:28px; font-weight:800; color:#38BDF8; display:block; margin:6px 0; font-family:'JetBrains Mono';">0 د.ع</span>
      <span style="font-size:11px; color:#64748B;">صافي القيمة المستحقة بعد احتساب الخصومات</span>
    </div>
    <div class="card" style="padding:18px 22px;">
      <span style="font-size:13px; color:#94A3B8;">إجمالي تسديدات الحساب المستلمة</span>
      <span style="font-size:28px; font-weight:800; color:#34D399; display:block; margin:6px 0; font-family:'JetBrains Mono';">0 د.ع</span>
      <span style="font-size:11px; color:#64748B;">نسبة التحصيل: 0.0% (0 سند قبض)</span>
    </div>
    <div class="card" style="padding:18px 22px;">
      <span style="font-size:13px; color:#94A3B8;">إجمالي ديون المختبر في السوق</span>
      <span style="font-size:28px; font-weight:800; color:#F87171; display:block; margin:6px 0; font-family:'JetBrains Mono';">0 د.ع</span>
      <span style="font-size:11px; color:#64748B;">مجموع المبالغ المتبقية بذمة الأطباء</span>
    </div>
  </div>

  <!-- Analytics View Tabs -->
  <div style="display:flex; gap:12px; border-bottom:1px solid #1E212E; padding-bottom:8px;">
    <span class="btn-dark" style="background:#1E2232; color:#C084FC; font-weight:700;">📊 الرؤية العامة والمخططات</span>
    <span class="btn-dark">📈 تقرير أرباح المختبر والفواتير</span>
    <span class="btn-dark">👥 حسابات الأطباء التفصيلية (2)</span>
    <span class="btn-dark">🦷 التركيبات وأنواع العمل</span>
    <span class="btn-dark">🛠️ إنتاجية الفنيين (30 يوماً) (3)</span>
  </div>

  <!-- Recharts Monthly Container -->
  <div class="chart-box">
    <div style="display:flex; justify-content:space-between; align-items:center;">
      <div>
        <h3 style="font-size:18px; font-weight:800; color:#FFFFFF;">تقرير أرباح المختبر شهرياً مقابل عدد الفواتير <span style="background:#0284C7; font-size:10px; padding:2px 8px; border-radius:4px; font-family:'JetBrains Mono';">Recharts</span></h3>
        <span style="font-size:13px; color:#64748B;">تحليل بياني متقدم يوضح نمو أرباح المختبر الصافية مقابل كثافة الفواتير</span>
      </div>
      <div style="display:flex; gap:8px;">
        <button class="btn-dark">المندوب: جميع المندوبين ▼</button>
        <button class="btn-dark" style="background:#6D28D9; color:white;">مدمج</button>
        <button class="btn-dark">الأرباح</button>
        <button class="btn-dark">الفواتير</button>
      </div>
    </div>

    <!-- Chart Placeholder Graphic with Gridlines and Markers -->
    <div style="height:200px; display:flex; align-items:flex-end; gap:36px; padding:20px 40px; border-bottom:1px solid #1E212E; border-top:1px solid #1E212E; margin:16px 0;">
      <div style="flex:1; display:flex; flex-direction:column; align-items:center; gap:8px;">
        <div style="width:40px; height:80px; background:#2563EB; border-radius:4px 4px 0 0;"></div>
        <span style="font-size:11px; color:#64748B;">مايو</span>
      </div>
      <div style="flex:1; display:flex; flex-direction:column; align-items:center; gap:8px;">
        <div style="width:40px; height:120px; background:#2563EB; border-radius:4px 4px 0 0;"></div>
        <span style="font-size:11px; color:#64748B;">يونيو</span>
      </div>
      <div style="flex:1; display:flex; flex-direction:column; align-items:center; gap:8px;">
        <div style="width:40px; height:95px; background:#2563EB; border-radius:4px 4px 0 0;"></div>
        <span style="font-size:11px; color:#64748B;">يوليو</span>
      </div>
      <div style="flex:1; display:flex; flex-direction:column; align-items:center; gap:8px;">
        <div style="width:40px; height:140px; background:#2563EB; border-radius:4px 4px 0 0;"></div>
        <span style="font-size:11px; color:#64748B;">أغسطس</span>
      </div>
      <div style="flex:1; display:flex; flex-direction:column; align-items:center; gap:8px;">
        <div style="width:40px; height:160px; background:#6D28D9; border-radius:4px 4px 0 0;"></div>
        <span style="font-size:11px; color:#C084FC; font-weight:700;">سبتمبر</span>
      </div>
      <div style="flex:1; display:flex; flex-direction:column; align-items:center; gap:8px;">
        <div style="width:40px; height:110px; background:#2563EB; border-radius:4px 4px 0 0;"></div>
        <span style="font-size:11px; color:#64748B;">أكتوبر</span>
      </div>
    </div>

    <div style="display:grid; grid-template-columns: repeat(4, 1fr); gap:16px;">
      <div><span style="font-size:11px; color:#64748B;">إجمالي أرباح المختبر الصافية:</span><span style="font-weight:700; font-size:15px; display:block; color:#38BDF8;">0 د.ع</span></div>
      <div><span style="font-size:11px; color:#64748B;">إجمالي الفواتير المسجلة:</span><span style="font-weight:700; font-size:15px; display:block; color:#FBBF24;">0 فاتورة</span></div>
      <div><span style="font-size:11px; color:#64748B;">متوسط ربح الفاتورة:</span><span style="font-weight:700; font-size:15px; display:block; color:#34D399;">0 د.ع</span></div>
      <div><span style="font-size:11px; color:#64748B;">أعلى شهر إنتاجاً وأرباحاً:</span><span style="font-weight:700; font-size:15px; display:block; color:#A78BFA;">سبتمبر 2026</span></div>
    </div>
  </div>
</body>
</html>
"""

with open("/app/applet/tmp/a7.html", "w") as f:
    f.write(a7_html)

# -------------------------------------------------------------
# Batch Render All Views to public/
# -------------------------------------------------------------
tasks = [
    ("a1.html", "a1.png", "1920,868"),
    ("a2.html", "a2.png", "1920,960"),
    ("a3.html", "a3.png", "1920,960"),
    ("a4.html", "a4.png", "1920,1080"),
    ("a5.html", "a5.png", "1920,960"),
    ("a6.html", "a6.png", "1920,960"),
    ("a7.html", "a7.png", "1920,960"),
]

for html_file, out_png, win_size in tasks:
    html_path = os.path.join("/app/applet/tmp", html_file)
    png_path = os.path.join(PUBLIC_DIR, out_png)
    cmd = [
        CHROME_BIN,
        "--no-sandbox",
        "--headless",
        f"--window-size={win_size}",
        f"--screenshot={png_path}",
        html_path
    ]
    subprocess.run(cmd, check=True)
    size = os.path.getsize(png_path)
    print(f"Rendered {out_png} ({size} bytes)")

print("All screenshots generated and saved to public/ successfully!")
