

document.addEventListener('DOMContentLoaded', () => {
    // --- Language Data ---
    const translations = {
        ko: {
            main_title: "IT 인턴십 리포트",
            main_subtitle: "글로벌 웹사이트 리뉴얼 & 일본 문화 리서치",
            sec1_title: "실습 개요 및 프로젝트 배경",
            sec1_p1: "Global Innovation Handle의 자회사, Global Human Bridge에서 진행된 웹사이트 리뉴얼 프로젝트에 참여했습니다. 사용자 경험(UX)과 접근성 최적화를 목표로, 노후화된 기존 웹 페이지를 전면 재구축하는 과제를 수행했습니다.",
            sec2_title: "기술 스택 및 개발 과정",
            sec2_subtitle1: "사용한 기술",
            sec2_p1: "기반 시스템은 <b>WordPress</b>, 코딩 작업은 <b>VS Code</b>를 사용했습니다. 초기 단계에서는 의도적으로 AI 도구를 배제하고 수동 코딩에 집중하여, 테마 구조와 CSS 레이아웃에 대한 깊은 이해를 다졌습니다.",
            sec2_subtitle2: "AI 도입과 재구축",
            sec2_p2: "두 가지 디자인 시안의 장점을 통합하는 과정에서 AI 코드 합성을 시도했으나, 생성된 코드의 반응형 설계 오류로 인해 레이아웃이 붕괴되는 문제가 발생했습니다. 결국 AI 코드를 폐기하고, <b>VS Code에서 처음부터 수동으로 코드를 재작성</b>하는 결정을 내렸습니다.",
            sec2_quote: "이 경험을 통해 AI에 의존하기보다 기본기를 탄탄히 하는 것의 중요성을 깨달았고, 문제 해결 능력을 크게 향상시킬 수 있었습니다.",
            sec3_title: "일본 소비 문화 및 서브컬처 현장 조사",
            sec3_p1: "웹 개발 외에도, <b>신주쿠와 아키하바라에서 현장 필드워크</b>를 진행하며 사용자 행동과 문화에 대한 통찰을 얻었습니다.",
            research1: "<b>신주쿠 북오프(Book Off):</b> 방대한 중고 서적, 게임, 음반 등이 체계적으로 정리되어 있었습니다. 합리적인 가격과 양호한 상품 상태는 물론, 사용자가 원하는 정보(상품)에 쉽게 접근할 수 있는 매장 레이아웃과 분류 체계는 웹사이트의 정보 구조 설계에 중요한 영감을 주었습니다.",
            research2: "<b>아키하바라:</b> 여러 상점을 방문하며 애니메이션 굿즈, 피규어, 전자기기 등 특정 타겟층을 겨냥한 상품 구성과 전문화된 디스플레이를 관찰했습니다. 각 상점의 독특한 개성과 전문성은 '틈새 사용자'를 공략하는 브랜딩 전략과 사용자 경험 설계의 중요성을 보여주었습니다.",
            sec3_p2: "이러한 현장 경험은 웹 디자인의 핵심 원리인 <b>\"정보 구조화\"</b>와 <b>\"사용자 중심 설계\"</b>의 중요성을 현실 세계에서 직접 확인하는 귀중한 계기가 되었습니다.",
            sec4_title: "종합 성과 및 자기 평가",
            sec4_p1: "이번 인턴십을 통해 다음과 같은 핵심 역량을 확보했습니다.",
            skill1_title: "WordPress & Local Dev",
            skill1_desc: "Local WP 환경 구축 및 테마 커스터마이징",
            skill2_title: "Coding & Troubleshooting",
            skill2_desc: "AI 코드 문제 해결 및 수동 재구축 완수",
            skill3_title: "Hybrid Dev Method",
            skill3_desc: "기초 코딩 능력과 AI 활용의 균형점 확립",
            skill4_title: "UI/UX & Autonomous Design",
            skill4_desc: "정보 구조와 사용자 동선을 고려한 자율적 디자인",
            sec5_title: "총괄 및 향후 전망",
            sec5_p1: "이번 프로젝트는 기술적 역량과 문제 해결 능력을 한 단계 끌어올린 귀중한 경험이었습니다. 앞으로도 구조적 사고에 기반한 웹 디자인과 프론트엔드 개발 역량을 갈고닦아, 더 나은 웹 서비스를 만드는 데 기여하고 싶습니다.",
            footer_text: "&copy; 2026 Internship Report. All Rights Reserved.",
            sec6_title: "상세 개발 일지",
            log1_title: "프로젝트 시작: 기초 다지기",
            log1_p1: "담당자로부터 회사와 프로젝트에 대한 전반적인 설명을 들은 후, WordPress 플랫폼을 기반으로 Global Human Bridge의 노후화된 웹 페이지 리뉴얼을 시작했습니다. 초기에는 VS Code를 사용하여 AI 지원 없이 코딩하며, 스스로의 실력을 시험하고 프로젝트의 기본 구조를 파악하는 데 집중했습니다. 이 과정에서 클라이언트의 요구사항을 정확히 반영하기 위해 정기적인 피드백을 요청하고 검수 과정을 거쳤습니다.",
            log2_title: "도전: 디자인 통합과 AI 코드의 한계",
            log2_p1: "리뉴얼을 위해 두 가지 형태의 디자인 시안을 제시했고, 각각의 장단점에 대한 피드백을 받았습니다. 이를 바탕으로 두 시안의 장점만을 결합한 단일 페이지 개발을 요청받았습니다. 초기에는 AI를 활용해 장점들을 합치려 했으나, 반응형으로 설계된 부분에서 AI가 생성한 코드가 제대로 동작하지 않는 문제가 발생했습니다.",
            log2_quote: "결국 AI가 생성한 코드를 폐기하고, 반응형 레이아웃을 처음부터 직접 작성했습니다. 이 경험은 AI의 편리함 이면의 한계를 명확히 인지하고, 핵심 로직은 반드시 개발자가 직접 제어해야 한다는 교훈을 주었습니다.",
            log3_title: "확장: 전체 레이아웃 재구성 및 개선",
            log3_p1: "기존 리뉴얼 작업의 연장선상에서 다른 페이지들의 디자인과 구조 개선 작업을 진행했습니다. WordPress 페이지 레이아웃을 재구성하고, 사용자 편의성을 고려해 콘텐츠 배치와 시각적 요소를 수정했습니다. 이 단계에서는 AI 도구를 디자인 시안을 빠르게 검토하고 아이디어를 얻는 보조 수단으로 효율적으로 활용했으며, 코어 기능은 VS Code로 직접 구현하며 완성도를 높였습니다.",
            sec8_title: "자율적 디자인 및 로컬 환경 구축",
            sec8_p1: "인덱스 및 디렉토리 페이지 디자인 개선 실습에서는 별도의 구체적인 시안 없이 전체적인 레이아웃을 직접 기획하고 구성하도록 요청받았습니다. 사용자의 흐름과 정보 구조를 최우선으로 고려하여 섹션 배치와 시각적 요소를 설계했습니다.",
            sec8_p2: "해당 페이지가 WordPress 테마 파일 내부에 포함되어 있어 실서버에서 즉시 테스트하기 어려운 문제가 있었습니다. 이를 해결하기 위해 <b>로컬 WordPress 환경(Local WP)을 직접 구축</b>하여 변경 사항을 신속하게 검토하고 디버깅을 진행했습니다. 이 과정을 통해 디자인 자율성이 높은 작업에서 드래프트, 수정, 리뷰 사이클을 거치며 스스로 결과물을 개선해 나가는 능력을 길렀습니다."
        },
        ja: {
            main_title: "ITインターンシップレポート",
            main_subtitle: "グローバルウェブサイトリニューアル & 日本文化リサーチ",
            sec1_title: "実習概要およびプロジェクト背景",
            sec1_p1: "Global Innovation Handleの子会社であるGlobal Human Bridgeで行われたウェブサイトリニューアルプロジェクトに参加しました。ユーザーエクスペリエンス(UX)とアクセシビリティの最適化を目指し、老朽化した既存のウェブページを全面的に再構築する課題を遂行しました。",
            sec2_title: "技術スタックおよび開発プロセス",
            sec2_subtitle1: "使用した技術",
            sec2_p1: "基盤システムは<b>WordPress</b>、コーディング作業は<b>VS Code</b>を使用しました。初期段階では意図的にAIツールを排除し、手動コーディングに集中することで、テーマ構造とCSSレイアウトへの深い理解を培いました。",
            sec2_subtitle2: "AI導入と再構築",
            sec2_p2: "2つのデザイン案の長所を統合する過程でAIによるコード合成を試みましたが、生成されたコードのレスポンシブ設計エラーによりレイアウトが崩壊する問題が発生しました。最終的にAIコードを破棄し、<b>VS Codeで最初から手動でコードを再作成</b>する決断を下しました。",
            sec2_quote: "この経験を通じて、AIに依存するよりも基礎を固めることの重要性を悟り、問題解決能力を大幅に向上させることができました。",
            sec3_title: "日本の消費文化およびサブカルチャーの現地調査",
            sec3_p1: "ウェブ開発以外にも、<b>新宿と秋葉原で現地フィールドワーク</b>を行い、ユーザーの行動と文化に対する洞察を得ました。",
            research1: "<b>新宿のブックオフ：</b>膨大な中古書籍、ゲーム、アルバムなどが体系的に整理されていました。合理的な価格と良好な商品状態はもちろん、ユーザーが求める情報（商品）に容易にアクセスできる店舗レイアウトと分類体系は、ウェブサイトの情報構造設計において重要なインスピレーションを与えました。",
            research2: "<b>秋葉原：</b>複数の店舗を訪れ、アニメグッズ、フィギュア、電子製品など、特定のターゲット層を狙った商品構成と専門的なディスプレイを観察しました。各店舗のユニークな個性と専門性は、「ニッチなユーザー」を攻略するブランディング戦略とユーザーエクスペリエンス設計の重要性を示していました。",
            sec3_p2: "これらの現地経験は、ウェブデザインの核心原則である<b>「情報構造化」</b>と<b>「ユーザー中心設計」</b>の重要性を現実世界で直接確認する貴重な機会となりました。",
            sec4_title: "総合成果および自己評価",
            sec4_p1: "今回のインターンシップを通じて、以下の主要な能力を確保しました。",
            skill1_title: "WordPress & Local Dev",
            skill1_desc: "Local WP環境の構築およびテーマのカスタマイズ",
            skill2_title: "Coding & Troubleshooting",
            skill2_desc: "AIコードの問題解決および手動での再構築完遂",
            skill3_title: "Hybrid Dev Method",
            skill3_desc: "基礎コーディング能力とAI活用のバランス確立",
            skill4_title: "UI/UX & Autonomous Design",
            skill4_desc: "情報構造とユーザー動線を考慮した自律的デザイン",
            sec5_title: "総括および今後の展望",
            sec5_p1: "今回のプロジェクトは、技術的能力と問題解決能力を一段階引き上げる貴重な経験でした。今後も構造的思考に基づいたウェブデザインとフロントエンド開発能力を磨き、より良いウェブサービスの創造に貢献したいです。",
            footer_text: "&copy; 2026 Internship Report. All Rights Reserved.",
            sec6_title: "詳細開発ログ",
            log1_title: "プロジェクト開始：基礎固め",
            log1_p1: "担当者から会社とプロジェクトに関する全体的な説明を受けた後、WordPressプラットフォームを基盤にGlobal Human Bridgeの老朽化したWebページリニューアルを開始しました。初期にはVS Codeを使い、AIの支援を受けずにコーディングを行い、自らの実力をテストし、プロジェクトの基本構造を把握することに重点を置きました。この過程で、クライアントの要件を正確に反映するため、定期的なフィードバックを求め、検収プロセスを経ました。",
            log2_title: "挑戦：デザイン統合とAIコードの限界",
            log2_p1: "リニューアルのために2つの形態のデザイン案を提示し、それぞれの長所と短所についてフィードバックを受けました。それに基づき、両案の長所だけを組み合わせた単一ページでの開発を要請されました。当初はAIを活用して長所を合わせようとしましたが、レスポンシブ設計された部分でAIが生成したコードが正しく動作しない問題が発生しました。",
            log2_quote: "最終的にAIが生成したコードを破棄し、レスポンシブレイアウトを最初から自分で作成しました。この経験は、AIの利便性の裏にある限界を明確に認識し、コアロジックは必ず開発者が直接制御しなければならないという教訓を与えてくれました。",
            log3_title: "拡張：全体レイアウトの再構築と改善",
            log3_p1: "既存のリニューアル作業の延長線上で、他のページのデザインや構造を改善する作業を進めました。WordPressのページレイアウトを再構成し、ユーザーの利便性を考慮してコンテンツの配置と視覚的要素を修正しました。この段階では、AIツールをデザイン案を迅速に検討し、アイデアを得るための補助手段として効率的に活用し、コア機能はVS Codeで直接実装して完成度を高めました。",
            sec8_title: "自律的デザインおよびローカル環境の構築",
            sec8_p1: "インデックスページとディレクトリページのデザイン改善実習では、別途具体的な案なしで全体的なページ形状とレイアウトを自ら企画・構成するよう求められました。ユーザーの流れと情報構造を最優先に考慮し、セクション配置と視覚的要素を設計しました。",
            sec8_p2: "そのページがWordPressテーマファイルの内部に含まれており、本番サーバーですぐにテストすることが難しかったため、これを解決するために<b>ローカルWordPress環境（Local WP）を自ら構築</b>し、変更を迅速に検討してデバッグを進めました。この過程を通じて、デザインの自律性が高い作業でドラフト、修正、レビューのサイクルを経て、自ら結果物を改善していく能力を養いました。"
        }
    };

    const langKoBtn = document.getElementById('lang-ko');
    const langJaBtn = document.getElementById('lang-ja');

    // --- Functions ---
    const changeLanguage = (lang) => {
        document.documentElement.lang = lang;
        document.querySelectorAll('[data-lang-key]').forEach(el => {
            const key = el.dataset.langKey;
            if (translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });
        
        // Update button states for accessibility and style
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

    // --- Animation Observer ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add a staggered delay for each observed element
                entry.target.style.animationDelay = `${index * 100}ms`;
                entry.target.classList.add('fade-in-up-init');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    // Observe all elements with the .section class
    document.querySelectorAll('.section').forEach(section => {
        observer.observe(section);
    });

    // --- Event Listeners ---
    langKoBtn.addEventListener('click', () => changeLanguage('ko'));
    langJaBtn.addEventListener('click', () => changeLanguage('ja'));

    // --- Initial Load ---
    const preferredLanguage = localStorage.getItem('preferredLanguage') || 'ko';
    changeLanguage(preferredLanguage);
});