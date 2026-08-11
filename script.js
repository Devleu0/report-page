

document.addEventListener('DOMContentLoaded', () => {
    // --- DOM Elements ---
    const langKoBtn = document.getElementById('lang-ko');
    const langJaBtn = document.getElementById('lang-ja');
    const mainNav = document.querySelector('.main-nav');
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelectorAll('.main-nav a');
    const header = document.querySelector('.main-header');

    // --- Language Data ---
    const translations = {
        ko: {
            logo_text: "Portfolio",
            nav_about: "소개",
            nav_projects: "프로젝트",
            nav_skills: "보유 기술",
            main_title: "코드로 문제를 해결하는 개발자",
            main_subtitle: "기초를 중시하며, UI/UX와 자율적 디자인 개선에 강점이 있습니다.",
            about_title: "저는요,",
            about_p1: "Global Innovation Handle에서 웹사이트 리뉴얼 프로젝트를 수행하며 IT 실무를 경험했습니다. 사용자의 관점에서 UI/UX와 접근성을 최적화하는 것에 큰 흥미를 느끼고, AI 도구의 한계를 분석하고 직접 코드를 재작성하여 문제를 해결하며 기초 코딩의 중요성을 깨달았습니다.",
            about_p2: "새로운 기술을 배우고 적용하는 것을 즐기며, 특히 정보 구조화와 사용자 중심 설계에 대한 이해를 바탕으로 자율적인 디자인 개선 능력을 갖추었습니다. 앞으로도 탄탄한 기본기와 구조적 사고를 바탕으로 더 나은 웹 서비스를 만드는 개발자가 되고 싶습니다.",
            projects_title: "주요 프로젝트",
            project1_type: "웹 개발 & 리뉴얼",
            project1_title: "Global Human Bridge 웹사이트",
            project1_desc: "노후화된 기존 웹 페이지를 WordPress 기반으로 전면 재구축했습니다. AI가 생성한 코드의 반응형 오류를 직접 재작성하여 해결하며 문제 해결 능력을 길렀고, Local WP 환경을 구축하여 개발 효율성을 높였습니다.",
            project2_type: "사용자 리서치",
            project2_title: "일본 소비 문화 현장 조사",
            project2_desc: "신주쿠, 아키하바라 등 현장 필드워크를 통해 사용자 행동과 문화 트렌드를 분석했습니다. 웹사이트의 정보 구조 설계와 '틈새 사용자'를 공략하는 UX 전략에 대한 중요한 인사이트를 얻었습니다.",
            skills_title: "보유 기술",
            skill1_title: "WordPress & Local Dev",
            skill1_desc: "Local WP 환경 구축 및 테마 커스터마이징",
            skill2_title: "Coding & Troubleshooting",
            skill2_desc: "AI 코드 문제 해결 및 수동 재구축 완수",
            skill3_title: "Hybrid Dev Method",
            skill3_desc: "기초 코딩 능력과 AI 활용의 균형점 확립",
            skill4_title: "UI/UX & Autonomous Design",
            skill4_desc: "정보 구조와 사용자 동선을 고려한 자율적 디자인",
            footer_text: "&copy; 2026 Portfolio. All Rights Reserved."
        },
        ja: {
            logo_text: "Portfolio",
            nav_about: "紹介",
            nav_projects: "プロジェクト",
            nav_skills: "スキル",
            main_title: "コードで問題を解決する開発者",
            main_subtitle: "基礎を重視し、UI/UXと自律的なデザイン改善に強みがあります。",
            about_title: "私について",
            about_p1: "Global Innovation Handleでウェブサイトリニューアルプロジェクトを遂行し、IT実務を経験しました。ユーザーの視点からUI/UXとアクセシビリティを最適化することに大きな興味を感じ、AIツールの限界を分析し、自らコードを再作成して問題を解決する中で、基礎コーディングの重要性を悟りました。",
            about_p2: "新しい技術を学び、適用することを楽しんでおり、特に情報構造化とユーザー中心設計への理解を基に、自律的なデザイン改善能力を身につけました。今後も堅実な基礎力と構造的思考を基に、より良いウェブサービスを作る開発者になりたいです。",
            projects_title: "主なプロジェクト",
            project1_type: "ウェブ開発 & リニューアル",
            project1_title: "Global Human Bridge ウェブサイト",
            project1_desc: "老朽化した既存のウェブページをWordPressベースで全面再構築しました。AIが生成したコードのレスポンシブエラーを自ら再作成して解決し、問題解決能力を養いました。また、Local WP環境を構築して開発効率を高めました。",
            project2_type: "ユーザーリサーチ",
            project2_title: "日本の消費文化の現地調査",
            project2_desc: "新宿、秋葉原などの現地フィールドワークを通じて、ユーザーの行動と文化トレンドを分析しました。ウェブサイトの情報構造設計と「ニッチなユーザー」を攻略するUX戦略に関する重要な洞察を得ました。",
            skills_title: "保有スキル",
            skill1_title: "WordPress & Local Dev",
            skill1_desc: "Local WP環境の構築およびテーマのカスタマイズ",
            skill2_title: "Coding & Troubleshooting",
            skill2_desc: "AIコードの問題解決および手動での再構築完遂",
            skill3_title: "Hybrid Dev Method",
            skill3_desc: "基礎コーディング能力とAI活用のバランス確立",
            skill4_title: "UI/UX & Autonomous Design",
            skill4_desc: "情報構造とユーザー動線を考慮した自律的デザイン",
            footer_text: "&copy; 2026 Portfolio. All Rights Reserved."
        }
    };

    // --- Functions ---
    const changeLanguage = (lang) => {
        document.documentElement.lang = lang;
        document.querySelectorAll('[data-lang-key]').forEach(el => {
            const key = el.dataset.langKey;
            if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });

        // Update button states
        if (lang === 'ko') {
            langKoBtn.classList.add('active');
            langKoBtn.setAttribute('aria-pressed', 'true');
            langJaBtn.classList.remove('active');
            langJaBtn.setAttribute('aria-pressed', 'false');
        } else {
            langJaBtn.classList.add('active');
            langJaBtn.setAttribute('aria-pressed', 'true');
            langKoBtn.classList.remove('active');
            langKoBtn.setAttribute('aria-pressed', 'false');
        }

        localStorage.setItem('preferredLanguage', lang);
    };

    // --- Scroll & Header Handling ---
    let lastScrollTop = 0;
    window.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            // Downscroll
            header.style.top = `-${header.offsetHeight}px`;
        } else {
            // Upscroll
            header.style.top = "0";
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
    });

    // --- Navigation Handling ---
    const handleNavClick = (e) => {
        e.preventDefault();
        const targetId = e.currentTarget.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const headerOffset = header.offsetHeight;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
        // Close mobile nav if open
        if (mainNav.classList.contains('active')) {
            mainNav.classList.remove('active');
            menuToggle.classList.remove('active');
        }
    };

    navLinks.forEach(link => {
        link.addEventListener('click', handleNavClick);
    });

    // --- Mobile Menu Toggle ---
    menuToggle.addEventListener('click', () => {
        mainNav.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    // --- Animation Observer ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.section').forEach(section => {
        observer.observe(section);
    });

    // --- Active Nav Link on Scroll ---
    const sections = document.querySelectorAll('section[id]');
    const setActiveLink = () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - header.offsetHeight * 1.5) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    };


    // --- Event Listeners ---
    langKoBtn.addEventListener('click', () => changeLanguage('ko'));
    langJaBtn.addEventListener('click', () => changeLanguage('ja'));
    window.addEventListener('scroll', setActiveLink);


    // --- Initial Load ---
    const preferredLanguage = localStorage.getItem('preferredLanguage') || 'ko';
    changeLanguage(preferredLanguage);
    setActiveLink(); // Set active link on load
});