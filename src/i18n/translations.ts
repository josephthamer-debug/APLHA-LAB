export const translations = {
  en: {
    // Top Bar & Navigation
    nav: {
      brandName: "Alpha Lab",
      brandSub: "Dental Laboratory Management System",
      home: "Home",
      product: "Product",
      features: "Features",
      tour: "Interactive Tour",
      screenshots: "Screenshots",
      whyAlpha: "Why Alpha Lab",
      faq: "FAQ",
      contact: "Contact",
      requestDemo: "Request Application Copy",
      languageToggle: "العربية",
      menuOpen: "Open menu",
      menuClose: "Close menu",
    },

    // Hero Section
    hero: {
      badge: "Dental Laboratory Management System",
      headline: "Precision in Every Case. Clarity in Every Account.",
      subheadline:
        "A smarter way to manage dental laboratory cases, financial accounts, payments, and daily operations — all in one specialized system.",
      primaryCta: "Request Application Copy",
      secondaryCta: "Explore Features",
      previewBadge: "Representative Live Preview",
      representativeNotice: "Sample dental laboratory data shown for demonstration purposes",
      activeCases: "Active Laboratory Cases",
      todayDeliveries: "Scheduled Deliveries Today",
      collectedThisMonth: "Collected This Month",
      clinicsServed: "Partner Clinics",
      quickFilterAll: "All Cases",
      quickFilterUrgent: "Urgent",
      quickFilterProduction: "In Fabrication",
      quickFilterReady: "Ready for Delivery",
    },

    // Product Introduction
    productIntro: {
      kicker: "About the System",
      heading: "Comprehensive Capabilities for Laboratory Excellence",
      subheading:
        "Alpha Lab provides a dedicated environment for organizing laboratory operations, doctors' accounts, cases tracking, and daily reporting.",
      pillars: [
        {
          number: "01",
          title: "Interactive and Practical Case Registration",
          desc: "Interactive and practical case registration.",
        },
        {
          number: "02",
          title: "Step-by-Step Tracking of Doctors' Cases",
          desc: "Step-by-step tracking of doctors' cases.",
        },
        {
          number: "03",
          title: "Management of Doctors' Accounts, Invoices, and Statements",
          desc: "Management of doctors' accounts, invoices, and account statements.",
        },
        {
          number: "04",
          title: "Monthly Statement Exports and Daily Reports",
          desc: "Export monthly statements and generate daily reports for each case and each doctor.",
        },
      ],
    },

    // 10 Features Section
    features: {
      kicker: "Engineered Capabilities",
      heading: "Comprehensive Features for Laboratory Excellence",
      subheading:
        "Every tool in Alpha Lab is designed around the authentic everyday operations of dental prosthetic and ceramic laboratories.",
      items: [
        {
          id: "cases",
          title: "Dental Case Management",
          desc: "Comprehensive tracking from intake to final clinical delivery. Record tooth numbers, restorations (Zirconia, E-Max, PFM, Implants), shade codes, prep types, and target delivery deadlines.",
          highlight: "Interactive Tooth Chart & Status Progression",
        },
        {
          id: "clients",
          title: "Dentist and Client Management",
          desc: "Centralized directory of dentists, medical centers, and clinics with custom pricing tiers, shade preferences, contact directories, and active orders history.",
          highlight: "Per-Doctor Preferences & Dedicated Price Lists",
        },
        {
          id: "financial",
          title: "Financial Accounts",
          desc: "Real-time accounting ledger built specifically for lab cash flows. Track receivables, clinic balances, expenses, laboratory materials overhead, and net profitability.",
          highlight: "Integrated Double-Entry Financial Engine",
        },
        {
          id: "payments",
          title: "Payments and Collections",
          desc: "Log cash payments, bank transfers, cheques, and clinic credit notes with instant receipt generation, partial balance allocations, and collection history.",
          highlight: "Multi-Method Payment Vouchers & Balance Splitting",
        },
        {
          id: "statements",
          title: "Invoices and Account Statements",
          desc: "Generate itemized tax invoices per case or consolidated monthly statements for each clinic. Export to PDF, print directly, or share via WhatsApp and email.",
          highlight: "Print-Ready Statements & Instant Digital Sharing",
        },
        {
          id: "discounts",
          title: "Discounts and Deductions",
          desc: "Manage negotiated clinic volume discounts, remakes deduction policies, warranty terms, and prompt payment adjustments with strict administrative authorization.",
          highlight: "Audited Remake Deductions & Volume Rules",
        },
        {
          id: "technicians",
          title: "Technician Management",
          desc: "Assign work items to ceramicists, CAD designers, and casting technicians. Track individual production units, calculate piece-rate commissions, and monitor turnaround times.",
          highlight: "Piece-Rate Commission & Production Tracking",
        },
        {
          id: "reports",
          title: "Reports and Analytics",
          desc: "Clear visual metrics on daily intake volume, most requested restoration materials, technician output, revenue trends, and aging accounts receivable.",
          highlight: "Executive Laboratory Dashboard & Material Yield",
        },
        {
          id: "representatives",
          title: "Sales Representatives & Couriers",
          desc: "Track field representatives and pickup couriers. Monitor case pick-ups, deliveries, on-site payment collections, and representative sales commissions.",
          highlight: "Route Dispatch & Field Collection Tracking",
        },
      ],
    },

    // Interactive Tour Section
    tour: {
      kicker: "Hands-on Experience",
      heading: "Explore the System Workflow",
      subheading:
        "Select an operational module below to inspect how Alpha Lab coordinates data across your dental laboratory.",
      disclaimer: "Representative interactive simulation with sample data",
      tabs: {
        cases: "Cases Management",
        accounts: "Clinic Accounts",
        payments: "Collections & Vouchers",
        reports: "Lab Analytics",
        technicians: "Technicians & Production",
      },
      casesTab: {
        searchPlaceholder: "Search patient, doctor, order #...",
        filterAll: "All Stages",
        filterProduction: "Fabrication",
        filterReady: "Ready",
        columns: {
          order: "Order #",
          patient: "Patient",
          clinic: "Dentist / Clinic",
          restoration: "Restoration",
          shade: "Shade",
          stage: "Current Stage",
          technician: "Technician",
          dueDate: "Delivery",
          amount: "Total",
          actions: "Action",
        },
        stages: {
          cad_design: "CAD Design",
          milling: "CAM Milling",
          sintering: "Sintering",
          layering: "Ceramic Layering",
          qc: "Quality Check",
          ready: "Ready for Delivery",
          delivered: "Delivered",
        },
      },
      accountsTab: {
        title: "Clinic Statement Summary",
        subtitle: "Real-time receivables balance and payment tracking per dental center",
        doctor: "Dentist / Clinic",
        activeCases: "Active Orders",
        totalBilled: "Total Invoiced",
        totalPaid: "Total Received",
        balanceDue: "Outstanding Balance",
        lastActivity: "Last Payment",
        viewStatement: "View Statement",
      },
      paymentsTab: {
        title: "Recent Payment Receipts & Vouchers",
        subtitle: "Official cash and transfer collections allocated to clinic balances",
        voucher: "Voucher #",
        clinic: "Clinic",
        amount: "Amount",
        method: "Payment Method",
        date: "Date",
        receiver: "Received By",
        printVoucher: "Print Voucher",
        methods: {
          cash: "Cash",
          bank_transfer: "Bank Transfer",
          cheque: "Cheque",
          card: "POS / Card",
        },
      },
      reportsTab: {
        title: "Laboratory Performance Snapshot",
        subtitle: "Monthly production units, top restoration categories, and financial indicators",
        totalCasesMonth: "Total Cases (Current Month)",
        activeUnitsCount: "Restoration Units Produced",
        revenueMonth: "Gross Invoiced Value",
        collectionRate: "Collection Ratio",
        topMaterials: "Top Restoration Types",
        stagesDistribution: "Cases by Fabrication Stage",
      },
      techniciansTab: {
        title: "Technician Roster & Piece-Rate Output",
        subtitle: "Monitor bench productivity, assigned units, and calculated monthly commission",
        techName: "Technician",
        specialty: "Department / Specialty",
        currentLoad: "Assigned Work",
        unitsDone: "Completed (Units)",
        efficiency: "On-Time Rate",
        commission: "Earned Commission",
      },
    },

    // Why Alpha Lab Section
    whyAlpha: {
      kicker: "Core Advantages",
      heading: "Practical Value for Laboratory Owners & Technicians",
      subheading:
        "Built strictly around authentic laboratory workflows — delivering clarity, operational peace of mind, and financial accuracy.",
      benefits: [
        {
          number: "01",
          title: "More Organized Laboratory Operations",
          desc: "Eliminate misplaced paper dockets and lost prescription notes. Every case has a verifiable record with assigned technician, tooth shade, and exact delivery timetable.",
        },
        {
          number: "02",
          title: "Clearer Financial Records",
          desc: "Never lose track of what a clinic owes. Maintain an auditable, transparent financial ledger that reconciles every case invoice against logged payments.",
        },
        {
          number: "03",
          title: "Convenient Access to Case Information",
          desc: "Instantly retrieve patient restoration specs, previous shade codes, remake history, or delivery records in seconds from any computer in the lab.",
        },
        {
          number: "04",
          title: "Better Visibility into Payment Records",
          desc: "Know exactly which clinics are up to date, which balances are aging, and how much cash or bank transfers were received during any given day or month.",
        },
        {
          number: "05",
          title: "Organized Invoices and Account Statements",
          desc: "Produce clean, professional branded statements and itemized case invoices that reinforce your laboratory's reputation for quality and reliability.",
        },
        {
          number: "06",
          title: "Easier Review of Laboratory Activity",
          desc: "Evaluate your lab's genuine capacity, understand material consumption trends, and measure individual technician output with honest data.",
        },
      ],
    },

    // Application Screenshot Gallery
    gallery: {
      kicker: "System Interfaces",
      heading: "Application Screenshot Gallery",
      subheading:
        "Explore authentic interfaces designed for specialized dental laboratory workstations. Click any screenshot to inspect in full detail.",
      filterAll: "All Interfaces",
      filterCases: "Cases & Invoices",
      filterFinance: "Financial & Reports",
      filterTech: "Team & Lab",
      filterAnalytics: "Analytics",
      notice: "Original system interface screenshots from Alpha Lab Management System",
      openLightbox: "Expand Screenshot",
      closeLightbox: "Close (Esc)",
      zoomIn: "Zoom In",
      zoomOut: "Reset Zoom",
      nextView: "Next Interface",
      prevView: "Previous Interface",
      items: [
        {
          id: "dashboard",
          category: "finance",
          categoryLabel: "Dashboard",
          image: "/images/a2.png",
          title: "Financial and Operational Dashboard",
          description:
            "A comprehensive overview of the laboratory's financial and operational indicators.",
          details: [
            "Comprehensive overview of operational indicators and net revenue",
            "Real-time monitoring of issued invoices, collections, and outstanding debt",
            "Monthly financial performance comparison and cash transaction flow",
          ],
        },
        {
          id: "invoice",
          category: "cases",
          categoryLabel: "Invoices",
          image: "/images/a3.png",
          title: "Invoice Registration",
          description:
            "A dedicated interface for registering invoices and organizing their details.",
          details: [
            "Fast invoice registration window with doctor-specific agreed pricing",
            "Organized unit count selection, restoration materials, and production stages",
            "Assigned technicians, delivery deadline date, and draft auto-saving",
          ],
        },
        {
          id: "doctors",
          category: "finance",
          categoryLabel: "Doctors",
          image: "/images/a4.png",
          title: "Doctors' Accounts and Cases Statement",
          description:
            "Review doctors' account statements and their associated cases.",
          details: [
            "Review doctors' account statements and their associated cases",
            "Net invoices, received payments, remaining balance, and custom price lists",
            "Instant PDF statement generation and direct thermal printing",
          ],
        },
        {
          id: "technicians",
          category: "technicians",
          categoryLabel: "Team",
          image: "/images/a5.png",
          title: "Technicians and Laboratory Team",
          description:
            "Manage and review technicians and laboratory team information in an organized interface.",
          details: [
            "Manage and review technicians and laboratory team information in an organized interface",
            "Track active technician workload, completed units, and turnaround time",
            "Technician directory, performance indicators, and task delegation",
          ],
        },
        {
          id: "statements",
          category: "finance",
          categoryLabel: "Statements",
          image: "/images/a6.png",
          title: "Account Statements and Report Printing",
          description:
            "Review account statements and prepare reports for printing.",
          details: [
            "Review account statements and prepare reports for printing",
            "Custom PDF statement themes, logo customization, and live document preview",
            "Direct A4 print engine and instant high-resolution PDF export",
          ],
        },
        {
          id: "analytics",
          category: "analytics",
          categoryLabel: "Analytics",
          image: "/images/a7.png",
          title: "Statistics and Analytics",
          description:
            "Explore laboratory statistics and analytics to better understand operational performance.",
          details: [
            "Explore laboratory statistics and analytics to better understand operational performance",
            "Advanced graphical analysis of monthly net profit against invoice density",
            "Audit sales representatives accounts, commissions, and technician output",
          ],
        },
      ],
    },

    // FAQ Section
    faq: {
      kicker: "Common Questions",
      heading: "Frequently Asked Questions",
      subheading:
        "Direct answers about Alpha Lab Management System, setup, technical requirements, and support.",
      items: [
        {
          id: "what-is-alpha-lab",
          question: "What is Alpha Lab?",
          answer:
            "Alpha Lab is specialized desktop and network management software engineered specifically for dental manufacturing laboratories. It centralizes incoming dental case orders, technical fabrication stages, dentist accounts, payments, invoices, technician commissions, and laboratory reporting into a cohesive, easy-to-use platform.",
        },
        {
          id: "who-is-it-for",
          question: "Who is the software designed for?",
          answer:
            "The system is built for dental laboratories of all sizes — from specialized ceramic and CAD/CAM milling centers to full-service commercial dental laboratories employing multiple technicians, receptionists, delivery couriers, and accountants.",
        },
        {
          id: "which-workflows",
          question: "Which workflows does it support?",
          answer:
            "Alpha Lab covers the entire dental laboratory lifecycle: patient and doctor case intake, tooth chart specification and shade matching, technician assignment, fabrication stage progression (CAD, Milling, Sintering, Layering, QC), itemized invoicing, clinic statements, multi-method payment vouchers, technician commission calculations, and business analytics.",
        },
        {
          id: "request-demo",
          question: "How can I request a demonstration?",
          answer:
            "You can request a personalized demonstration by submitting the contact form on this page or reaching out directly via WhatsApp or phone. Our specialist team will coordinate a walkthrough tailored to your laboratory's size, volume, and current operational workflow.",
        },
        {
          id: "installation-requirements",
          question: "What are the installation requirements?",
          answer:
            "Alpha Lab runs efficiently on standard Windows PC systems across your local area network (LAN). It does not require high-cost proprietary servers. A central laboratory computer acts as the local data hub, and any number of workstations (reception, CAD room, accounting desk) can connect with minimal latency.",
        },
        {
          id: "backups-updates",
          question: "How are backups and updates handled?",
          answer:
            "The software includes built-in automated local and external drive backup tools to safeguard your laboratory's financial and case history. System updates are provided to subscribers to maintain compatibility, improve workflows, and add requested capabilities.",
        },
        {
          id: "contact-company",
          question: "How can I contact the company?",
          answer:
            "You can reach our dedicated technical and sales advisory team through the contact form below, direct email, official WhatsApp, or phone. We provide direct onboarding assistance and responsive customer support for registered laboratories.",
        },
      ],
    },

    // Contact & Demo Request
    contact: {
      kicker: "Get Started Today",
      heading: "Ready to Organize Your Laboratory?",
      subheading:
        "Schedule a customized demonstration of Alpha Lab. We will show you how the system fits your specific laboratory volume, price lists, and workflow.",
      form: {
        title: "Request a System Demonstration",
        nameLabel: "Your Name",
        namePlaceholder: "e.g. Dr. Bassam / Eng. Tariq",
        labNameLabel: "Dental Laboratory Name",
        labNamePlaceholder: "e.g. Precision Dental Studio",
        phoneLabel: "Phone Number / WhatsApp",
        phonePlaceholder: "+964 7XX XXX XXXX / +966 5X XXX XXXX",
        emailLabel: "Email Address (Optional)",
        emailPlaceholder: "lab@example.com",
        preferredLangLabel: "Preferred System Language",
        langArabic: "Arabic (العربية)",
        langEnglish: "English",
        langBoth: "Both Arabic & English",
        workloadLabel: "Approximate Daily Cases",
        workload1: "1 – 15 cases / day",
        workload2: "15 – 50 cases / day",
        workload3: "50+ cases / day (Commercial Lab)",
        messageLabel: "Notes or Questions (Optional)",
        messagePlaceholder: "Tell us about your current laboratory management system or specific questions...",
        submitBtn: "Request a Demo",
        submittingBtn: "Submitting Request...",
        successTitle: "Demo Request Received",
        successMsg: "Thank you. Our laboratory systems specialist will contact you shortly to schedule your personalized demonstration.",
        sendAnother: "Submit Another Request",
        validation: {
          nameRequired: "Please enter your name.",
          labRequired: "Please enter your laboratory name.",
          phoneRequired: "Please enter a valid phone number or WhatsApp contact.",
        },
      },
      directChannels: {
        title: "Direct Contact Information",
        description: "Prefer to speak with an advisor immediately? Reach out directly via our official communication channels.",
        phoneTitle: "Direct Phone & WhatsApp",
        phoneValue: "+964 771 812 2018",
        whatsappNote: "Available Sunday to Thursday, 9:00 AM – 6:00 PM",
        emailTitle: "Official Inquiries",
        emailValue: "alphacosoft@gmail.com",
      },
    },

    // Footer
    footer: {
      brandDesc:
        "Alpha Lab is dedicated software engineered for dental manufacturing laboratories. Streamlining clinical cases, accounting statements, payments, and technician productivity.",
      navigationTitle: "Navigation",
      contactTitle: "Contact & Inquiries",
      systemTitle: "System & Compatibility",
      systemWindows: "Windows 10 / 11 64-bit",
      systemLan: "Multi-User Local Area Network",
      systemBackups: "Automated Encrypted Backups",
      copyright: "All rights reserved. Alpha Lab Management System.",
      legalNotice: "Designed for dental manufacturing and commercial dental laboratories.",
      builtWith: "Precision Dental Engineering Software",
    },

    // Demo Modal
    modal: {
      title: "Request to Purchase Application Copy",
      subtitle: "Please enter customer and laboratory details to request purchasing Alpha Lab.",
      customerNameLabel: "Customer Name",
      customerNamePlaceholder: "e.g. Dr. Bassam / Eng. Tariq",
      labNameLabel: "Laboratory Name",
      labNamePlaceholder: "e.g. Precision Dental Studio",
      customerEmailLabel: "Customer Email",
      customerEmailPlaceholder: "customer@example.com",
      customerPhoneLabel: "Customer Phone Number",
      customerPhonePlaceholder: "+964 7XX XXX XXXX",
      notesLabel: "Notes or Inquiry",
      notesPlaceholder: "Add any questions, daily caseload, or specific requests...",
      submitBtn: "Request a Trial Version of the Application",
      submittingBtn: "Sending Request...",
      successTitle: "Your request has been sent and will be processed and we will contact you as soon as possible",
      successNotice: "Customer information has been forwarded directly to management at alphacosoft@gmail.com",
      close: "Close",
      validation: {
        nameRequired: "Please enter the customer name.",
        labRequired: "Please enter the laboratory name.",
        emailRequired: "Please enter a valid customer email.",
        phoneRequired: "Please enter the customer phone number.",
      },
    },
  },

  ar: {
    // Top Bar & Navigation
    nav: {
      brandName: "ألفا لاب",
      brandSub: "نظام إدارة مختبرات صناعة الأسنان",
      home: "الرئيسية",
      product: "عن النظام",
      features: "المميزات",
      tour: "جولة تفاعلية",
      screenshots: "واجهات النظام",
      whyAlpha: "لماذا ألفا لاب",
      faq: "الأسئلة الشائعة",
      contact: "اتصل بنا",
      requestDemo: "اطلب نسخة من التطبيق",
      languageToggle: "English",
      menuOpen: "فتح القائمة",
      menuClose: "إغلاق القائمة",
    },

    // Hero Section
    hero: {
      badge: "نظام إدارة مختبرات صناعة الأسنان",
      headline: "دقّة في كل حالة، ووضوح في كل حساب.",
      subheadline:
        "طريقة أكثر تنظيماً لإدارة حالات مختبر الأسنان، والحسابات المالية، والتسديدات، والعمليات اليومية ضمن نظام متخصص واحد.",
      primaryCta: "اطلب نسخة من التطبيق",
      secondaryCta: "اكتشف المميزات",
      previewBadge: "معاينة تفاعلية للنظام",
      representativeNotice: "بيانات تمثيلية واقعية لمختبر صناعة أسنان لأغراض العرض والتوضيح",
      activeCases: "الحالات النشطة في المختبر",
      todayDeliveries: "حالات التسليم المجدولة اليوم",
      collectedThisMonth: "المقبوضات خلال الشهر الحالي",
      clinicsServed: "العيادات والمراكز المشتركة",
      quickFilterAll: "كافة الحالات",
      quickFilterUrgent: "الحالات العاجلة",
      quickFilterProduction: "قيد التصنيع والإنتاج",
      quickFilterReady: "جاهزة للتسليم",
    },

    // Product Introduction
    productIntro: {
      kicker: "عن النظام",
      heading: "إمكانيات متكاملة لإدارة مختبر صناعة الأسنان",
      subheading:
        "يوفر نظام ألفا لاب بيئة عمل متخصصة لتنظيم عمليات المختبر، ومتابعة الحالات، وإدارة حسابات الأطباء، وإصدار التقارير اليومية والشهرية بدقة واحترافية.",
      pillars: [
        {
          number: "01",
          title: "تسجيل الحالات بواجهة تفاعلية وعملية",
          desc: "تسجيل الحالات بواجهة تفاعلية وعملية.",
        },
        {
          number: "02",
          title: "متابعة حالات الأطباء خطوة بخطوة",
          desc: "متابعة حالات الأطباء خطوة بخطوة.",
        },
        {
          number: "03",
          title: "متابعة حسابات الأطباء والفواتير والكشوفات",
          desc: "متابعة حسابات الأطباء والفواتير والكشوفات.",
        },
        {
          number: "04",
          title: "تصدير كشوفات شهرية وتقارير يومية لكل حالة ولكل طبيب",
          desc: "تصدير كشوفات شهرية وتقارير يومية لكل حالة ولكل طبيب.",
        },
      ],
    },

    // 10 Features Section
    features: {
      kicker: "إمكانيات متخصصة",
      heading: "مميزات شاملة لتنظيم وتطوير مختبرك",
      subheading:
        "كل أداة في نظام ألفا لاب طُوّرت انطلاقاً من الممارسة اليومية الفعلية لمختبرات التركيبات والتعويضات السنية.",
      items: [
        {
          id: "cases",
          title: "إدارة الحالات",
          desc: "متابعة دقيقة للحالة من لحظة استلام المقاس حتى تسليمها النهائي للعيادة. تسجيل أرقام الأسنان، نوع التعويضة (زركونيا، إيماكس، خزف معدني، زرعات)، دليل الألوان، وتاريخ التسليم المطلوب.",
          highlight: "مخطط سني تفاعلي وتتبع دقيق لمراحل الإنجاز",
        },
        {
          id: "clients",
          title: "إدارة الأطباء والعملاء",
          desc: "دليل مركزي للأطباء والمراكز السنية يتضمن قوائم الأسعار المتفق عليها، تفضيلات كل طبيب في بناء الخزف، بيانات الاتصال، وسجل الحالات السابقة.",
          highlight: "قوائم أسعار مخصصة لكل عيادة وتفضيلات الطبيب",
        },
        {
          id: "financial",
          title: "الحسابات المالية",
          desc: "دفتر أستاذ متكامل مصمم خصيصاً لتدفقات أموال مختبر الأسنان. متابعة مستحقات العيادات، المصاريف التشغيلية، تكاليف المواد الأولية، وصافي أرباح المختبر.",
          highlight: "محرك محاسبي دقيق لحسابات المختبر",
        },
        {
          id: "payments",
          title: "التسديدات والتحصيلات",
          desc: "تسجيل المقبوضات النقدية، الحوالات المصرفية، الشيكات، وإشعارات الخصم، مع إصدار فوري لسندات القبض وتوزيع الدفعات على رصيد العيادة.",
          highlight: "سندات قبض متعددة الطرق وتوزيع الدفعات",
        },
        {
          id: "statements",
          title: "الفواتير وكشوف الحساب",
          desc: "إصدار فواتير مفصلة لكل حالة، أو كشوف حساب مجمعة دورية لكل طبيب. تصدير مباشر بصيغة PDF، طباعة فورية، أو إرسال رقمي عبر واتساب والبريد.",
          highlight: "كشوف حساب احترافية جاهزة للطباعة والمشاركة",
        },
        {
          id: "discounts",
          title: "الخصومات والاستقطاعات",
          desc: "إدارة خصومات الكميات المتفق عليها مع العيادات الكبرى، وسياسات استقطاع حالات الإعادة (Remakes)، والضمانات، مع صلاحيات إدارية دقيقة.",
          highlight: "تنظيم خصومات الإعادة وضبط الصلاحيات",
        },
        {
          id: "technicians",
          title: "إدارة التقنيين",
          desc: "توزيع العمل على تقنيي الخزف، ومصممي CAD/CAM، وفنيي التشطيب. تتبع إنتاجية كل تقني، واحتساب عمولات القطعة تلقائياً، ومراقبة أوقات التنفيذ.",
          highlight: "احتساب نسب وعمولات التقنيين بحسب الإنجاز",
        },
        {
          id: "reports",
          title: "التقارير والتحليلات",
          desc: "مؤشرات بصرية واضحة لحجم الحالات المستلمة يومياً، أكثر المواد طلباً، إنتاجية الكادر الفني، نمو الإيرادات، وأعمار الديون المستحقة.",
          highlight: "لوحة معلومات تنفيذية ومتابعة استهلاك المواد",
        },
        {
          id: "representatives",
          title: "إدارة المندوبين والمبيعات",
          desc: "متابعة حركة مندوبي التوصيل واستلام الطبعات من العيادات، وتسليم الأعمال الجاهزة، وتسجيل المبالغ المحصلة ميدانياً، واحتساب عمولاتهم.",
          highlight: "تتبع خطوط التوصيل والتحصيل الميداني",
        },
      ],
    },

    // Interactive Tour Section
    tour: {
      kicker: "تجربة عملية",
      heading: "استكشف مسار العمل في النظام",
      subheading:
        "اختر أحد الأقسام التشغيلية أدناه لتتعرف على كيفية تنسيق نظام ألفا لاب للبيانات والعمليات في مختبرك.",
      disclaimer: "معاينة تفاعلية توضيحية باستخدام بيانات تمثيلية واقعية",
      tabs: {
        cases: "إدارة الحالات",
        accounts: "حسابات العيادات",
        payments: "التحصيلات وسندات القبض",
        reports: "التقارير والتحليلات",
        technicians: "التقنيين والإنتاج",
      },
      casesTab: {
        searchPlaceholder: "بحث برقم الحالة، اسم المريض، أو الطبيب...",
        filterAll: "كافة المراحل",
        filterProduction: "قيد التصنيع",
        filterReady: "جاهزة للتسليم",
        columns: {
          order: "رقم الحالة",
          patient: "المريض",
          clinic: "الطبيب / العيادة",
          restoration: "نوع العمل والمادة",
          shade: "اللون",
          stage: "المرحلة الحالية",
          technician: "التقني المسؤول",
          dueDate: "موعد التسليم",
          amount: "المبلغ",
          actions: "الإجراء",
        },
        stages: {
          cad_design: "تصميم CAD",
          milling: "تفريز وتصنيع CAM",
          sintering: "تلبيد وحرق",
          layering: "بناء الخزف والجماليات",
          qc: "فحص الجودة والمطابقة",
          ready: "جاهزة للتسليم",
          delivered: "تم التسليم",
        },
      },
      accountsTab: {
        title: "ملخص أرصدة وكشوف العيادات",
        subtitle: "متابعة فورية للمستحقات، الفواتير، ومجموع المدفوعات لكل مركز سنّي",
        doctor: "الطبيب / المركز",
        activeCases: "الحالات النشطة",
        totalBilled: "إجمالي الفواتير",
        totalPaid: "إجمالي المسدد",
        balanceDue: "الرصيد المتبقي",
        lastActivity: "آخر تسديد",
        viewStatement: "عرض كشف الحساب",
      },
      paymentsTab: {
        title: "سجل سندات القبض والدفعات المستلمة",
        subtitle: "توثيق المقبوضات النقدية والحوالات وإسنادها المباشر لأرصدة الأطباء",
        voucher: "رقم السند",
        clinic: "العيادة / الطبيب",
        amount: "المبلغ",
        method: "طريقة القبض",
        date: "التاريخ",
        receiver: "المستلم",
        printVoucher: "طباعة السند",
        methods: {
          cash: "نقدي",
          bank_transfer: "حوالة بنكية",
          cheque: "شيك بنكي",
          card: "دفع إلكتروني / بطاقة",
        },
      },
      reportsTab: {
        title: "مؤشرات أداء وإنتاجية المختبر",
        subtitle: "إحصائيات شهرية بعدد الوحدات المنجزة، وتوزيع المواد، والسيولة المالية",
        totalCasesMonth: "إجمالي الحالات (هذا الشهر)",
        activeUnitsCount: "وحدات الأسنان المصنعة",
        revenueMonth: "إجمالي قيمة الأعمال المفوترة",
        collectionRate: "نسبة التحصيل المالي",
        topMaterials: "أكثر التركيبات طلباً",
        stagesDistribution: "توزيع الحالات حسب مرحلة التصنيع",
      },
      techniciansTab: {
        title: "سجل إنتاجية الكادر الفني والعمولات",
        subtitle: "متابعة كفاءة التقنيين، والوحدات المكتملة، ونسب العمولات المستحقة",
        techName: "التقني",
        specialty: "التخصص / القسم",
        currentLoad: "الحالات قيد العمل",
        unitsDone: "المكتمل (وحدات)",
        efficiency: "نسبة الالتزام بالوقت",
        commission: "العمولة المستحقة",
      },
    },

    // Why Alpha Lab Section
    whyAlpha: {
      kicker: "القيمة العملية",
      heading: "فائدة حقيقية وملموسة لإدارة المختبر والتقنيين",
      subheading:
        "بُني النظام لتلبية الاحتياجات الواقعية لبيئة مختبرات صناعة الأسنان — ليمنحك راحة البال، والدقة المالية، وسلاسة الإنتاج.",
      benefits: [
        {
          number: "01",
          title: "تنظيم شامل لعمليات المختبر",
          desc: "التخلص التام من قصاصات الورق والوصفات المفقودة. لكل حالة سجل موثق يتضمن التقني المكلف، درجة اللون المختارة، وموعد التسليم المحدد بدقة.",
        },
        {
          number: "02",
          title: "سجلات مالية دقيقة وشفافة",
          desc: "وضوح تام في مستحقات كل عيادة وطبيب، مع دفتر حسابات شفاف يطابق فواتير الحالات المنجزة مع سندات القبض المدفوعة.",
        },
        {
          number: "03",
          title: "وصول فوري وسلس لبيانات الحالات",
          desc: "الاطلاع الفوري على مواصفات حالة المريض، تاريخ الألوان السابقة، أو حالات التعديل في ثوانٍ معدودة من أي جهاز داخل المختبر.",
        },
        {
          number: "04",
          title: "متابعة واضحة لمدفوعات العيادات",
          desc: "معرفة العيادات الملتزمة بالسداد وتلك التي تراكمت عليها الديون، مع تدقيق يومي وشهري للمبالغ النقدية والحوالات المقبوضة.",
        },
        {
          number: "05",
          title: "فواتير وكشوف حساب منسقة وجاهزة للطباعة",
          desc: "إصدار كشوف حساب وفواتير رسمية تحمل شعار مختبرك وتفاصيل كل سن، مما يعزز ثقة الأطباء والعيادات باحترافية مختبرك.",
        },
        {
          number: "06",
          title: "مراجعة ميسرة لنشاط وإنتاجية المختبر",
          desc: "تقييم واقعي للطاقة الإنتاجية للمختبر، ومتابعة استهلاك المواد (أقراص الزركونيا والخزف)، وقياس إنتاجية كل تقني بأرقام حقيقية.",
        },
      ],
    },

    // Application Screenshot Gallery
    gallery: {
      kicker: "واجهات النظام",
      heading: "معرض واجهات نظام ألفا لاب",
      subheading:
        "استعرض واجهات النظام الحقيقية المصممة خصيصاً لمختبرات صناعة الأسنان. انقر على أي واجهة للاطلاع عليها بالحجم الكامل.",
      filterAll: "كافة الواجهات",
      filterCases: "الحالات والفواتير",
      filterFinance: "الحسابات والتقارير",
      filterTech: "الكادر والإنتاج",
      filterAnalytics: "الإحصاءات والتحليلات",
      notice: "لقطات شاشات أصلية من نظام إدارة مختبرات صناعة الأسنان ألفا لاب",
      openLightbox: "تكبير الواجهة",
      closeLightbox: "إغلاق (Esc)",
      zoomIn: "تكبير",
      zoomOut: "استعادة الحجم",
      nextView: "الواجهة التالية",
      prevView: "الواجهة السابقة",
      items: [
        {
          id: "dashboard",
          category: "finance",
          categoryLabel: "لوحة المؤشرات",
          image: "/images/a2.png",
          title: "لوحة المؤشرات والتحليلات المالية والتشغيلية",
          description:
            "نظرة شاملة على المؤشرات المالية والتشغيلية للمختبر.",
          details: [
            "مؤشرات صافي الفواتير الصادرة والمقبوضات النقدية والديون المتبقية",
            "متابعة الحالات المعلقة والأطباء غير النشطين بنقرة واحدة",
            "مقارنة الأداء المالي الشهري للفواتير مقابل المسدد لآخر 12 شهراً",
          ],
        },
        {
          id: "invoice",
          category: "cases",
          categoryLabel: "تسجيل الفواتير",
          image: "/images/a3.png",
          title: "نافذة تسجيل فاتورة",
          description:
            "واجهة مخصصة لتسجيل الفواتير وتنظيم بياناتها.",
          details: [
            "الاحتساب المالي التلقائي وفق اتفاقية أسعار المختبر لكل طبيب",
            "تحديد نوع العمل والتركيبة وعدد الوحدات وحالة الإنتاج والتسليم",
            "إسناد الفنيين المسؤولين وتحديد تاريخ استلام الحالة وحفظ المسودات",
          ],
        },
        {
          id: "doctors",
          category: "finance",
          categoryLabel: "حسابات الأطباء",
          image: "/images/a4.png",
          title: "نافذة كشف حساب الأطباء والحالات",
          description:
            "عرض ومراجعة حسابات الأطباء والحالات المرتبطة بها.",
          details: [
            "عرض ومراجعة حسابات الأطباء والحالات المرتبطة بها وتفاصيلها",
            "بيان صافي الفواتير، المبالغ المسددة، الرصيد المتبقي، والخصومات الممنوحة",
            "تصدير كشف الحساب بصيغة PDF وطباعته أو تعديل الأسعار المخصصة",
          ],
        },
        {
          id: "technicians",
          category: "technicians",
          categoryLabel: "فريق المختبر",
          image: "/images/a5.png",
          title: "قائمة متابعة الفنيين وكادر المختبر",
          description:
            "متابعة الفنيين وكادر المختبر ضمن واجهة منظمة.",
          details: [
            "متابعة الفنيين وكادر المختبر ضمن واجهة منظمة مصنفة حسب الاختصاص",
            "مؤشرات الإنجاز، الحالات المسندة حالياً، ومعدل سرعة التسليم",
            "دليل الفنيين ومؤشرات الأداء والترتيب وتوزيع المهام",
          ],
        },
        {
          id: "statements",
          category: "finance",
          categoryLabel: "الكشوفات والطباعة",
          image: "/images/a6.png",
          title: "كشوفات الحسابات وطباعة التقارير",
          description:
            "عرض كشوفات الحسابات وتجهيز التقارير للطباعة.",
          details: [
            "عرض كشوفات الحسابات وتجهيز التقارير للطباعة بأعلى دقة",
            "تخصيص الشعار، واختيار نمط وثيم الكشف، والمعاينة الحية المباشرة",
            "تصدير مباشر لملف PDF عالي الدقة ومطابقة الحالات والفواتير",
          ],
        },
        {
          id: "analytics",
          category: "analytics",
          categoryLabel: "الإحصاءات والتحليلات",
          image: "/images/a7.png",
          title: "قائمة الإحصاءات والتحليلات",
          description:
            "عرض الإحصاءات والتحليلات للمساعدة في فهم أداء المختبر.",
          details: [
            "عرض الإحصاءات والتحليلات للمساعدة في فهم أداء المختبر بدقة",
            "تحليل بياني متقدم يوضح نمو الأرباح الصافية مقابل كثافة الفواتير",
            "متابعة حسابات وعمولات المندوبين وتفاصيل إنتاجية الفنيين",
          ],
        },
      ],
    },

    // FAQ Section
    faq: {
      kicker: "إجابات واضحة",
      heading: "الأسئلة الشائعة",
      subheading:
        "إجابات مباشرة ودقيقة حول نظام ألفا لاب، طريقة التشغيل، المتطلبات التقنية، والدعم الفني.",
      items: [
        {
          id: "what-is-alpha-lab",
          question: "ما هو نظام ألفا لاب (Alpha Lab)؟",
          answer:
            "ألفا لاب هو برنامج متخصص مصمم تحديداً لإدارة مختبرات صناعة وتعويضات الأسنان. يجمع النظام بين تنظيم استقبال الحالات والوصفات السنية، ومتابعة مراحل التصنيع الفني، وإدارة حسابات العيادات والأطباء، وتسجيل المقبوضات والدفعات، وإصدار الفواتير وكشوف الحساب، واحتساب عمولات التقنيين، وتوفير تقارير شاملة لنشاط المختبر في بيئة عمل واحدة سهلة الاستخدام.",
        },
        {
          id: "who-is-it-for",
          question: "لمن صُمم هذا النظام؟",
          answer:
            "صُمم النظام لكافة مختبرات الأسنان بمختلف أحجامها — بدءاً من المختبرات التخصصية ومراكز التفريز CAD/CAM، وحتى المختبرات التجارية الكبرى التي تضم أقساماً متعددة (خزف، معدن، تقويم، زرعات)، وفريقاً من التقنيين وموظفي الاستقبال ومندوبي التوصيل والمحاسبين.",
        },
        {
          id: "which-workflows",
          question: "ما هي مسارات العمل التي يدعمها النظام؟",
          answer:
            "يغطي النظام دورة عمل مختبر الأسنان بالكامل: استلام الحالات وتسجيل مواصفات الأسنان والألوان، وتوزيع العمل على التقنيين، وتتبع مراحل الإنتاج خطوة بخطوة (تصميم CAD، تفريز، تلبيد، بناء الخزف، فحص الجودة)، وإصدار الفواتير وسندات التسليم، ومتابعة كشوف حساب الأطباء، وتسجيل الدفعات النقدية والحوالات، واحتساب عمولات الكادر الفني، وإعداد التقارير الإدارية والمالية.",
        },
        {
          id: "request-demo",
          question: "كيف يمكنني طلب عرض تجريبي (Demo)؟",
          answer:
            "يمكنك طلب عرض تجريبي مخصص لمختبرك عبر تعبئة النموذج الموجود في أسفل هذه الصفحة، أو التواصل مباشرة عبر الواتساب أو الهاتف المتاحين. سيقوم فريقنا بالتنسيق معك لتقديم جولة تفصيلية تناسب حجم مختبرك ونوعية الحالات وقوائم أسعارك.",
        },
        {
          id: "installation-requirements",
          question: "ما هي متطلبات تثبيت وتشغيل النظام؟",
          answer:
            "يعمل نظام ألفا لاب بكفاءة عالية على أجهزة الكمبيوتر القياسية بنظام Windows عبر الشبكة المحلية (LAN) للمختبر. لا يتطلب خوادم باهظة الثمن؛ حيث يمكن تخصيص أحد أجهزة المختبر ليعمل كنقطة بيانات مركزية، وترتبط به بقية محطات العمل (الاستقبال، قسم التصميم، والمحاسبة) بسرعة وسلاسة.",
        },
        {
          id: "backups-updates",
          question: "كيف تتم إدارة النسخ الاحتياطي والتحديثات؟",
          answer:
            "يتضمن النظام أدوات نسخ احتياطي آلي مدمجة تتيح حفظ نسخ مشفرة من البيانات محلياً وعلى وحدات تخزين خارجية لضمان سلامة السجلات المالية وحالات الأطباء. كما يتم توفير تحديثات دورية للمشتركين لتعزيز الاستقرار وإضافة مميزات جديدة تلبي احتياجات المختبرات المتطورة.",
        },
        {
          id: "contact-company",
          question: "كيف يمكنني التواصل مع الشركة؟",
          answer:
            "يمكنك التواصل مع فريق الدعم الفني والاستشارات عبر نموذج الاتصال، أو عبر البريد الإلكتروني الرسمي، أو من خلال الواتساب والاتصال الهاتفي المباشر الموضحين في الموقع. نحن نحرص على تقديم دعم فني مستمر ومرافقة المختبرات في عملية التدريب والتثبيت.",
        },
      ],
    },

    // Contact & Demo Request
    contact: {
      kicker: "ابدأ التنظيم اليوم",
      heading: "هل أنت مستعد لتنظيم عمل مختبرك؟",
      subheading:
        "احجز عرضاً تجريبياً مخصصاً لنظام ألفا لاب. سنوضح لك كيف يلائم النظام حجم أعمالك، وقوائم أسعارك، وطبيعة تعاملاتك مع العيادات.",
      form: {
        title: "طلب عرض تجريبي للنظام",
        nameLabel: "الاسم الكريم",
        namePlaceholder: "مثال: د. بسام / الأستاذ طارق",
        labNameLabel: "اسم مختبر صناعة الأسنان",
        labNamePlaceholder: "مثال: مختبر الدقة لصناعة الأسنان",
        phoneLabel: "رقم الهاتف / الواتساب",
        phonePlaceholder: "+964 7XX XXX XXXX / +966 5X XXX XXXX",
        emailLabel: "البريد الإلكتروني (اختياري)",
        emailPlaceholder: "lab@example.com",
        preferredLangLabel: "لغة واجهة النظام المفضلة",
        langArabic: "اللغة العربية",
        langEnglish: "English",
        langBoth: "كلا اللغتين (العربية والإنجليزية)",
        workloadLabel: "معدل الحالات اليومية التقريبي",
        workload1: "1 – 15 حالة / يومياً",
        workload2: "15 – 50 حالة / يومياً",
        workload3: "أكثر من 50 حالة (مختبر تجاري كبير)",
        messageLabel: "ملاحظات أو استفسارات (اختياري)",
        messagePlaceholder: "أخبرنا عن طريقتكم الحالية في إدارة المختبر أو أي متطلبات خاصة تهمكم...",
        submitBtn: "اطلب عرضاً تجريبياً",
        submittingBtn: "جاري إرسال الطلب...",
        successTitle: "تم استلام طلبكم بنجاح",
        successMsg: "شكراً لتواصلكم. سيتواصل معكم أخصائي أنظمة المختبرات لدينا في أقرب وقت لترتيب موعد العرض التجريبي المخصص.",
        sendAnother: "إرسال طلب آخر",
        validation: {
          nameRequired: "يرجى إدخال اسم المسؤول أو الطبيب.",
          labRequired: "يرجى إدخال اسم المختبر.",
          phoneRequired: "يرجى إدخال رقم هاتف أو واتساب صحيح.",
        },
      },
      directChannels: {
        title: "معلومات التواصل المباشر",
        description: "هل تفضل التحدث مباشرة مع مستشار الأنظمة؟ تواصل معنا عبر قنواتنا الرسمية المباشرة.",
        phoneTitle: "الهاتف والواتساب المباشر",
        phoneValue: "+964 771 812 2018",
        whatsappNote: "متاح من الأحد إلى الخميس، 9:00 صباحاً – 6:00 مساءً",
        emailTitle: "الاستفسارات الرسمية",
        emailValue: "alphacosoft@gmail.com",
      },
    },

    // Footer
    footer: {
      brandDesc:
        "ألفا لاب هو نظام متخصص لإدارة مختبرات صناعة وتعويضات الأسنان. تنظيم كامل للحالات السريرية، كشوف الحسابات، سندات القبض، وإنتاجية الكادر الفني.",
      navigationTitle: "روابط الموقع",
      contactTitle: "الاتصال والاستفسارات",
      systemTitle: "بيئة التشغيل والتوافق",
      systemWindows: "Windows 10 / 11 64-bit",
      systemLan: "ربط شبكي محلي متعدد المستخدمين LAN",
      systemBackups: "نسخ احتياطي مشفر وتلقائي",
      copyright: "جميع الحقوق محفوظة. نظام ألفا لاب لإدارة مختبرات الأسنان.",
      legalNotice: "مخصص لمختبرات صناعة الأسنان والمراكز الفنية التخصصية.",
      builtWith: "هندسة برمجية متخصصة في تكنولوجيا صناعة الأسنان",
    },

    // Demo Modal
    modal: {
      title: "طلب شراء نسخة من التطبيق",
      subtitle: "يرجى تعبئة بيانات الزبون والمختبر لطلب شراء نسخة من نظام ألفا لاب.",
      customerNameLabel: "اسم الزبون",
      customerNamePlaceholder: "أدخل اسم الزبون (مثال: د. بسام أو الأستاذ طارق)",
      labNameLabel: "اسم المختبر",
      labNamePlaceholder: "أدخل اسم مختبر صناعة الأسنان",
      customerEmailLabel: "بريد الكتروني الزبون",
      customerEmailPlaceholder: "customer@example.com",
      customerPhoneLabel: "رقم هاتف الزبون",
      customerPhonePlaceholder: "07XXXXXXXXX / +964...",
      notesLabel: "ملاحظات او استعلام",
      notesPlaceholder: "أدخل أي ملاحظات، متطلبات خاصة، أو استفسارات إضافية...",
      submitBtn: "طلب نسخة تجريبية من التطبيق",
      submittingBtn: "جاري إرسال الطلب ومعالجة البيانات...",
      successTitle: "تم ارسال طلبك وسيتم معالجته والتواصل معكم في اقرب وقت ممكن",
      successNotice: "تم إرسال كامل تفاصيل الزبون إلى الإدارة المختصة عبر البريد الإلكتروني: alphacosoft@gmail.com",
      close: "إغلاق",
      validation: {
        nameRequired: "يرجى إدخال اسم الزبون.",
        labRequired: "يرجى إدخال اسم المختبر.",
        emailRequired: "يرجى إدخال بريد إلكتروني صحيح للزبون.",
        phoneRequired: "يرجى إدخال رقم هاتف الزبون.",
      },
    },
  },
};
