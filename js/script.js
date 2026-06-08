(function() {
    // 动态更新版权年份
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 导航栏滚动阴影
    const navbar = document.getElementById('navbar');
    let scrollTicking = false;
    const handleScroll = () => {
        if (!scrollTicking) {
            requestAnimationFrame(() => {
                if (window.scrollY > 10) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
                scrollTicking = false;
            });
            scrollTicking = true;
        }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    // 初始检查
    handleScroll();

    // Intersection Observer - 淡入动画
    const fadeElements = document.querySelectorAll('.fade-in-up');
    if ('IntersectionObserver' in window && fadeElements.length > 0) {
        const observerOptions = {
            root: null,
            rootMargin: '0px 0px -40px 0px',
            threshold: 0.12
        };

        const fadeObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    fadeObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);

        fadeElements.forEach(el => fadeObserver.observe(el));
    } else {
        // 降级方案：直接显示
        fadeElements.forEach(el => el.classList.add('visible'));
    }

    // 键盘导航增强：跳转到主内容区
    const mainContent = document.getElementById('main-content');
    const skipLink = document.querySelector('.skip-link');
    if (skipLink && mainContent) {
        skipLink.addEventListener('click', function(e) {
            e.preventDefault();
            mainContent.setAttribute('tabindex', '-1');
            mainContent.focus();
            const navbarHeight = navbar ? navbar.offsetHeight : 60;
            const mainTop = mainContent.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({ top: mainTop - navbarHeight - 16, behavior: 'smooth' });
        });
    }

    // 控制台欢迎信息
    console.log('%c🏠 万顷茫然的小站 %c已就绪 %c| %cGrit Clef (zxunge)',
        'font-size:1.2em;font-weight:bold;color:#e8c97a;',
        'color:#b0b8c5;',
        'color:#7a8494;',
        'color:#5b9bd5;');
    console.log('%c🔗 GitHub: https://github.com/zxunge', 'color:#b0b8c5;');
    console.log('%c📧 Contact: 3396563372@qq.com', 'color:#b0b8c5;');
})();