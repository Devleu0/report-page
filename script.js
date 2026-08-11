document.addEventListener('DOMContentLoaded', () => {

    // --- Language and Navigation (Existing Logic) ---
    const langKoBtn = document.getElementById('lang-ko');
    const langJaBtn = document.getElementById('lang-ja');
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    const navLinks = document.querySelectorAll('.main-nav a');
    const translations = {
        ko: {
            logo_text: "업무 보고서",
            nav_overview: "개요",
            nav_workflow: "업무 일지",
            nav_takeaways: "주요 경험",
            nav_tech: "기술 스택",
            hero_eyebrow: "2026 SUMMER INTERNSHIP",
            main_title: "인턴십 업무 보고서",
            hero_meta: "컴퓨터공학과 4학년 · Global Innovation Handle 웹 개발 인턴 · 2026.06 – 2026.07",
            main_subtitle: "'Global Human Bridge' 웹사이트 리뉴얼 프로젝트에 참여하며 배우고 느낀 점을 정리했습니다.",
            overview_title: "인턴십 개요",
            overview_p1: "본 보고서는 Global Innovation Handle 부서에서 진행한 인턴십의 업무 내용을 정리한 것입니다. 주된 업무는 자회사 'Global Human Bridge'의 노후화된 웹사이트를 리뉴얼하는 프로젝트였습니다. 개발에는 WordPress 플랫폼이 활용되었으며, VS Code를 사용하여 코딩을 진행했습니다.",
            workflow_title: "주요 업무 일지",
            wf1_title: "1. 프로젝트 착수 및 초기 개발",
            wf1_desc: "담당자로부터 회사에 대한 전반적인 설명을 듣고, 'Global Human Bridge' 웹사이트 리뉴얼 프로젝트에 착수했습니다. 초기에는 AI 사용 없이 개인의 실력을 점검하며 개발하는 데 중점을 두었고, 담당자의 정기적인 검수와 피드백을 반영하며 요구사항을 맞춰나갔습니다.",
            wf2_title: "2. 피드백 반영 및 반복 개선",
            wf2_desc: "두 가지 형태의 리뉴얼 시안을 제시했으나, 각각의 장단점에 대한 피드백을 받고 장점만을 통합한 단일 페이지로 개발하라는 요청을 받았습니다. 이 과정에서 AI를 활용해 두 시안의 장점을 합쳤지만, 반응형 설계 부분이 정상적으로 동작하지 않아 해당 코드를 직접 재작성하며 문제를 해결했습니다.",
            wf3_title: "3. 확장 작업 및 자율적 디자인",
            wf3_desc: "기존 리뉴얼 작업의 연장선으로, 인덱스 및 디렉토리 페이지의 디자인과 구조를 개선하는 과제를 받았습니다. 별도의 시안 없이 자율적으로 레이아웃을 기획하고 구성해야 했습니다. 사용자의 동선과 정보 구조를 고려하여 직접 섹션 배치와 시각 요소를 설계하고 수정하는 과정을 반복했습니다.",
            wf4_title: "4. 로컬 개발 환경 구축",
            wf4_desc: "작업 대상 페이지가 WordPress 테마 파일 내부에 있어 테스트 서버에서의 즉각적인 확인이 어려웠습니다. 이 문제를 해결하기 위해 로컬 머신에 WordPress 환경을 직접 구축하여 변경사항을 검토하고 디버깅을 진행함으로써 개발 효율을 높였습니다.",
            wf5_title: "5. 추가 페이지 구조 개선 및 완료",
            wf5_desc: "기존 웹사이트 리뉴얼 작업의 연장선으로, 다른 페이지의 디자인과 구조를 개선하는 작업을 진행했습니다. WordPress 기반으로 페이지 레이아웃을 재구성하고, 사용자 편의성을 고려해 콘텐츠 배치와 시각적 요소를 수정했습니다. 개발 과정에서는 VS Code로 필요한 기능과 스타일을 보완하고, AI 툴을 활용해 작업 효율을 높이며 디자인 시안을 신속하게 검토했습니다. 주기적인 수정 확인과 피드백 반영을 통해 페이지의 완성도를 높이고 사이트 전체와의 일관성을 확보했습니다.",
            takeaways_title: "주요 경험 및 제언",
            ta1_title: "AI 활용과 기초의 중요성",
            ta1_desc: "AI는 디자인 시안 조합이나 효율성 증대에 도움이 되지만, 반응형 웹과 같은 핵심 기능에서는 오류를 발생시킬 수 있습니다. AI가 생성한 코드를 맹신하기보다, 직접 분석하고 재작성할 수 있는 기초 코딩 능력이 필수적임을 깨달았습니다.",
            ta2_title: "자율적 기획 및 설계 역량",
            ta2_desc: "구체적인 시안 없이 '알아서 잘' 만들어보라는 요청은 스스로 기획하고 설계할 좋은 기회였습니다. 사용자 동선, 정보 구조 등을 스스로 고민하고 개선하는 과정을 통해 실무적인 디자인 역량을 기를 수 있었습니다.",
            ta3_title: "로컬 환경 구축의 필요성",
            ta3_desc: "테스트 서버의 제약사항을 극복하기 위해 Local WP 환경을 구축한 경험은 매우 중요했습니다. 다음 인턴은 입사 초기에 미리 로컬 환경을 세팅해두면 전체 개발 과정이 훨씬 수월해질 것입니다.",
            tech_title: "사용한 기술 스택",
            nav_personal: "개인적인 경험",
            personal_title: "일본 생활과 문화 체험",
            personal_desc: "업무 외적으로는 신주쿠의 북오프와 아키하바라의 여러 상점을 둘러보며 일본의 서브컬처와 중고 유통 문화를 직접 경험했습니다. 방대한 양의 상품이 상태별로 세심하게 분류되고 합리적인 가격으로 유통되는 모습을 보면서, 자원을 순환시키는 일본 특유의 소비 문화를 이해할 수 있었습니다.",
            personal_desc2: "주말에는 요코하마와 가마쿠라로 당일치기 여행을 다녀오며 도쿄 근교의 다양한 풍경을 눈에 담았고, 여름 시즌에 열린 스미다가와 불꽃축제를 현지 주민들 틈에서 직접 즐기기도 했습니다. 퇴근 후 동료들과 이자카야에 들러 이야기를 나누는 과정에서 시간 약속을 철저히 지키고 상대를 배려하는 일본 특유의 커뮤니케이션 방식을 몸으로 느낄 수 있었고, 서툴렀던 일본어 실력도 실생활 속에서 부딪혀 가며 조금씩 늘려나갈 수 있었던 8주였습니다.",
            cb1: "신주쿠 북오프",
            cb2: "아키하바라",
            cb3: "요코하마 당일치기",
            cb4: "가마쿠라",
            cb5: "스미다가와 불꽃축제",
            cb6: "퇴근 후 이자카야",
            footer_text: "&copy; 2026 Internship Report for Global Innovation Handle."
        },
        ja: {
            logo_text: "業務レポート",
            nav_overview: "概要",
            nav_workflow: "業務日誌",
            nav_takeaways: "主な経験",
            nav_tech: "技術スタック",
            hero_eyebrow: "2026年 サマーインターンシップ",
            main_title: "インターンシップ業務レポート",
            hero_meta: "情報工学科 4年生 · Global Innovation Handle ウェブ開発インターン · 2026.06 – 2026.07",
            main_subtitle: "「Global Human Bridge」のウェブサイトリニューアルプロジェクトに参加して学び、感じたことをまとめました。",
            overview_title: "インターンシップ概要",
            overview_p1: "本レポートは、Global Innovation Handle部署で行われたインターンシップの業務内容をまとめたものです。主な業務は、子会社「Global Human Bridge」の老朽化したウェブサイトをリニューアルするプロジェクトでした。開発にはWordPressプラットフォームが活用され、VS Codeを使用してコーディングを進めました。",
            workflow_title: "主な業務日誌",
            wf1_title: "1. プロジェクト着手と初期開発",
            wf1_desc: "担当者から会社に関する全体的な説明を受け、「Global Human Bridge」のウェブサイトリニューアルプロジェクトに着手しました。初期段階ではAIを使用せず、自身のスキルを試すことに重点を置き、担当者の定期的な検証とフィードバックを反映して要件を満たしていきました。",
            wf2_title: "2. フィードバックの反映と反復改善",
            wf2_desc: "2つのリニューアル案を提示しましたが、それぞれの長所と短所についてフィードバックを受け、長所を統合した単一ページとして開発するよう要請されました。この過程でAIを活用して2つの案の長所を組み合わせましたが、レスポンシブデザイン部分が正常に動作せず、該当コードを自ら再作成して問題を解決しました。",
            wf3_title: "3. 拡張作業と自律的デザイン",
            wf3_desc: "既存リニューアル作業の延長線上で、インデックスページとディレクトリページのデザインと構造を改善する課題を受けました。別途のデザイン案なしに、自律的にレイアウトを企画・構成する必要がありました。ユーザーの動線や情報構造を考慮し、自らセクション配置や視覚要素を設計・修正するプロセスを繰り返しました。",
            wf4_title: "4. ローカル開発環境の構築",
            wf4_desc: "作業対象のページがWordPressテーマファイル内にあり、テストサーバーでの即時確認が困難でした。この問題を解決するため、ローカルマシンにWordPress環境を直接構築し、変更内容の確認とデバッグを進めることで開発効率を高めました。",
            wf5_title: "5. 追加ページの構造改善と仕上げ",
            wf5_desc: "既存のウェブサイトリニューアル作業の延長線上で、他のページのデザインや構造を改善する作業を進行。WordPressに基づきページレイアウトを再構成し、ユーザーの利便性を考慮してコンテンツ配置と視覚的要素を修正。開発過程ではVS Codeで必要な機能とスタイルを補完し、AIツールで作業効率を高めつつデザイン案を迅速に検討。定期的な修正確認とフィードバック反映を通じてページの完成度を高め、サイト全体との一貫性を確保した。",
            takeaways_title: "主な経験と提案",
            ta1_title: "AIの活用と基礎の重要性",
            ta1_desc: "AIはデザイン案の組み合わせや効率化に役立ちますが、レスポンシブウェブのような核心機能でエラーを引き起こす可能性があります。AIが生成したコードを盲信するのではなく、自ら分析し再作成できる基礎的なコーディング能力が不可欠だと痛感しました。",
            ta2_title: "自律的な企画・設計能力",
            ta2_desc: "具体的なデザイン案なしに「よしなに」作ってほしいという要望は、自ら企画・設計する良い機会でした。ユーザー動線や情報構造などを自ら考え、改善していく過程で、実務的なデザイン能力を養うことができました。",
            ta3_title: "ローカル環境構築の必要性",
            ta3_desc: "テストサーバーの制約を克服するためにLocal WP環境を構築した経験は非常に重要でした。次のインターンは、入社初期に予めローカル環境を整えておくと、開発プロセス全体が格段にスムーズになるでしょう。",
            tech_title: "使用した技術スタック",
            nav_personal: "業務外の経験",
            personal_title: "日本での生活と文化体験",
            personal_desc: "業務外では、新宿のブックオフや秋葉原の店舗を訪れ、日本のサブカルチャーと中古流通文化を直接体験しました。膨大な量の商品が状態別に丁寧に分類され、合理的な価格で流通している様子を見て、資源を循環させる日本ならではの消費文化への理解を深めることができました。",
            personal_desc2: "週末には横浜や鎌倉へ日帰り旅行に出かけ、東京近郊の多様な風景を楽しみました。夏には隅田川花火大会を地元の人々に混ざって観覧することもできました。仕事終わりに同僚と居酒屋に立ち寄って話す中で、時間を厳守し相手を思いやる日本ならではのコミュニケーションのスタイルを肌で感じることができ、拙かった日本語も実生活の中で少しずつ上達させることができた8週間でした。",
            cb1: "新宿ブックオフ",
            cb2: "秋葉原",
            cb3: "横浜日帰り旅行",
            cb4: "鎌倉",
            cb5: "隅田川花火大会",
            cb6: "仕事終わりの居酒屋",
            footer_text: "&copy; 2026 Internship Report for Global Innovation Handle."
        }
    };
    let currentLang = 'ko';

    const changeLanguage = (lang) => {
        const dict = translations[lang];
        if (!dict) return;
        currentLang = lang;

        document.documentElement.lang = lang;

        document.querySelectorAll('[data-lang-key]').forEach(el => {
            const key = el.getAttribute('data-lang-key');
            if (dict[key] === undefined) return;
            if (el.tagName === 'TITLE' || key === 'footer_text') {
                el.innerHTML = dict[key];
            } else {
                el.textContent = dict[key];
            }
        });

        if (langKoBtn && langJaBtn) {
            langKoBtn.classList.toggle('active', lang === 'ko');
            langKoBtn.setAttribute('aria-pressed', lang === 'ko');
            langJaBtn.classList.toggle('active', lang === 'ja');
            langJaBtn.setAttribute('aria-pressed', lang === 'ja');
        }

        localStorage.setItem('preferredLanguage', lang);
    };

    if (langKoBtn && langJaBtn) {
        langKoBtn.addEventListener('click', () => changeLanguage('ko'));
        langJaBtn.addEventListener('click', () => changeLanguage('ja'));
    }
    
    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }

    // --- GSAP and New Features ---
    gsap.registerPlugin(ScrollTrigger);

    const horizontalWrapper = document.querySelector('.horizontal-wrapper');
    const horizontalContent = document.querySelector('.horizontal-content');
    const horizontalPanels = gsap.utils.toArray('.horizontal-panel');
    const progressBar = document.querySelector('.progress-bar');
    const scrollHint = document.querySelector('.scroll-hint');
    const gnbLinks = document.querySelectorAll('.main-nav a');

    // Full-viewport impact FX layers
    const fxStrobe = document.querySelector('.fx-strobe');
    const fxVignette = document.querySelector('.fx-vignette');
    const fxBeam = document.querySelector('.fx-beam');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Retriggerable CSS-class-driven pulse (removes then re-adds the class
    // on the next frame so the animation restarts even if it's still playing)
    const pulseFx = (el, className) => {
        if (!el || prefersReducedMotion) return;
        el.classList.remove(className);
        void el.offsetWidth; // force reflow to restart the animation
        el.classList.add(className);
    };

    // 1) Power-off / reboot strobe — fires when crossing into or out of
    //    the horizontal track (a full-viewport blackout-then-flicker).
    const playStrobe = () => pulseFx(fxStrobe, 'play');

    // 4) Laser scan beam — fires on each panel-to-panel transition.
    const playBeam = () => pulseFx(fxBeam, 'play');

    // 2) Edge vignette impact — neon light rushes in from the outer
    //    edge of the viewport and compresses toward the center.
    const playVignette = () => {
        if (!fxVignette || prefersReducedMotion) return;
        const proxy = { spread: 0 };
        gsap.to(proxy, {
            spread: 140,
            duration: 0.35,
            ease: 'power2.out',
            yoyo: true,
            repeat: 1,
            onStart: () => gsap.set(fxVignette, { opacity: 1 }),
            onUpdate: () => {
                fxVignette.style.boxShadow = `inset 0 0 ${proxy.spread}px ${proxy.spread * 0.6}px var(--glow-color)`;
            },
            onComplete: () => gsap.set(fxVignette, { opacity: 0 })
        });
    };

    // Use matchMedia for responsive GSAP animations
    ScrollTrigger.matchMedia({
        // Desktop view
        "(min-width: 769px)": function() {
            if (horizontalWrapper && horizontalContent && horizontalPanels.length) {
                const panelCount = horizontalPanels.length;

                let horizontalScroll = gsap.to(horizontalContent, {
                    x: () => `-${horizontalContent.scrollWidth - horizontalWrapper.offsetWidth}px`,
                    ease: "none",
                    scrollTrigger: {
                        trigger: horizontalWrapper,
                        pin: true,
                        scrub: 1,
                        end: () => `+=${horizontalContent.scrollWidth - horizontalWrapper.offsetWidth}`,
                        invalidateOnRefresh: true,
                        // 2-1) Magnetic snap: an overshoot into the next panel
                        // always settles with that panel centered in view,
                        // giving each full-screen effect a clean beat to land on.

                        // Progress bar animation + light scanline jitter while scrubbing
                        onUpdate: self => {
                            if (progressBar) {
                                gsap.to(progressBar, { width: self.progress * 100 + "%", duration: 0.1, overwrite: true });
                            }
                        },
                        // 5) Entering the horizontal track: reboot flash +
                        //    switch the whole page into its "CRT / dark phase" mode.
                        onEnter: () => {
                            if (scrollHint) {
                                setTimeout(() => scrollHint.classList.add('fade-out'), 2000);
                            }
                            document.body.classList.add('crt-active', 'phase-dark');
                            playStrobe();
                        },
                        onEnterBack: () => {
                            document.body.classList.add('crt-active', 'phase-dark');
                            playStrobe();
                        },
                        onLeave: () => {
                            document.body.classList.remove('crt-active', 'phase-dark');
                        },
                        onLeaveBack: () => {
                            document.body.classList.remove('crt-active', 'phase-dark');
                            if (scrollHint) scrollHint.classList.remove('fade-out');
                        }
                    }
                });

                // ScrollSpy for GNB + per-panel impact effects, synced to the
                // exact scroll position where each panel is centered (2-1).
                horizontalPanels.forEach((panel, i) => {
                    ScrollTrigger.create({
                        trigger: panel,
                        containerAnimation: horizontalScroll,
                        start: "left center",
                        end: "right center",
                        onToggle: self => {
                            if (self.isActive) {
                                gnbLinks.forEach(link => link.classList.remove('active'));
                                const correspondingLink = document.querySelector(`.main-nav a[href="#${panel.id}"]`);
                                if(correspondingLink) {
                                    correspondingLink.classList.add('active');
                                }
                            }
                        }
                    });

                    // Laser beam pass on every panel change except the first
                    // (which is already on screen when the track locks in).
                    if (i > 0) {
                        ScrollTrigger.create({
                            trigger: panel,
                            containerAnimation: horizontalScroll,
                            start: "left right+=10%",
                            onEnter: playBeam,
                            onEnterBack: playBeam
                        });
                    }

                    // Edge vignette impact specifically on the "주요 경험 및 제언" panel.
                    if (panel.id === 'takeaways') {
                        ScrollTrigger.create({
                            trigger: panel,
                            containerAnimation: horizontalScroll,
                            start: "left center",
                            onEnter: playVignette,
                            onEnterBack: playVignette
                        });
                    }
                });
            }
        },

        // Mobile view
        "(max-width: 768px)": function() {
            // On mobile, GSAP doesn't pin. CSS handles the vertical layout.
            // We can hide elements that are only for horizontal scroll.
            if(scrollHint) scrollHint.style.display = 'none';
            if(progressBar) progressBar.parentElement.style.display = 'none';

            // ScrollSpy for mobile (vertical scroll)
            gsap.utils.toArray('.horizontal-panel, .vertical-section').forEach(section => {
                ScrollTrigger.create({
                    trigger: section,
                    start: 'top center-=100',
                    end: 'bottom center-=100',
                    onToggle: self => {
                         if (self.isActive) {
                            gnbLinks.forEach(link => link.classList.remove('active'));
                            const correspondingLink = document.querySelector(`.main-nav a[href="#${section.id}"]`);
                            if (correspondingLink) {
                                correspondingLink.classList.add('active');
                            }
                        }
                    }
                });
            });
        }
    });

    // --- Initial Load ---
    const preferredLanguage = localStorage.getItem('preferredLanguage') || 'ko';
    if(typeof changeLanguage === "function") {
        changeLanguage(preferredLanguage);
    }
});