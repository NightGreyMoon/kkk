// 移动端导航菜单切换
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // 点击菜单项后关闭移动端菜单
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
});

// 滚动时导航栏样式变化
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// 产品分类筛选功能
document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const productCards = document.querySelectorAll('.product-card');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // 移除所有按钮的激活状态
            tabButtons.forEach(btn => btn.classList.remove('active'));
            // 激活当前按钮
            this.classList.add('active');
            
            const category = this.getAttribute('data-category');
            
            // 筛选产品卡片
            productCards.forEach(card => {
                if (category === 'all' || card.getAttribute('data-category') === category) {
                    card.style.display = 'block';
                    // 添加动画效果
                    card.style.opacity = '0';
                    setTimeout(() => {
                        card.style.opacity = '1';
                    }, 100);
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});

// 平滑滚动到指定位置
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70; // 减去导航栏高度
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// 联系表单提交处理
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 获取表单数据
            const formData = new FormData(this);
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const phone = this.querySelector('input[type="tel"]').value;
            const message = this.querySelector('textarea').value;
            
            // 简单验证
            if (!name || !email || !message) {
                alert('请填写必填项目');
                return;
            }
            
            // 模拟发送
            const submitBtn = this.querySelector('.submit-btn');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = '发送中...';
            submitBtn.disabled = true;
            
            // 模拟延迟
            setTimeout(() => {
                alert('留言已发送，我们将尽快回复您！');
                this.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });
    }
});

// 页面元素进入视口时的动画效果
function createObserver() {
    const options = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, options);
    
    // 观察所有需要动画的元素
    const animatedElements = document.querySelectorAll(
        '.service-card, .product-card, .news-card, .section-header'
    );
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// 页面加载完成后执行动画观察器
document.addEventListener('DOMContentLoaded', createObserver);

// 返回顶部功能
function createBackToTop() {
    const backToTopBtn = document.createElement('button');
    backToTopBtn.innerHTML = '↑';
    backToTopBtn.className = 'back-to-top';
    backToTopBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: #3498db;
        color: white;
        border: none;
        border-radius: 50%;
        font-size: 20px;
        cursor: pointer;
        opacity: 0;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 4px 12px rgba(52, 152, 219, 0.3);
    `;
    
    document.body.appendChild(backToTopBtn);
    
    // 滚动显示/隐藏按钮
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.style.opacity = '1';
            backToTopBtn.style.transform = 'scale(1)';
        } else {
            backToTopBtn.style.opacity = '0';
            backToTopBtn.style.transform = 'scale(0.8)';
        }
    });
    
    // 点击返回顶部
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // 悬停效果
    backToTopBtn.addEventListener('mouseenter', () => {
        backToTopBtn.style.background = '#2980b9';
        backToTopBtn.style.transform = 'scale(1.1)';
    });
    
    backToTopBtn.addEventListener('mouseleave', () => {
        backToTopBtn.style.background = '#3498db';
        backToTopBtn.style.transform = 'scale(1)';
    });
}

// 创建返回顶部按钮
document.addEventListener('DOMContentLoaded', createBackToTop);

// 鼠标悬停效果增强
document.addEventListener('DOMContentLoaded', function() {
    // 为服务卡片添加悬停效果
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.02)';
            this.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
        });
    });
    
    // 为产品卡片添加悬停效果
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
            this.style.boxShadow = '0 15px 35px rgba(0,0,0,0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
        });
    });
});

// 打字机效果（可选，为首页标题添加动态效果）
function typewriterEffect() {
    const text = '海宁凯瑞工业智能设备有限公司';
    const element = document.querySelector('.hero-content h1');
    
    if (element) {
        element.textContent = '';
        let i = 0;
        
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, 100);
            }
        }
        
        // 延迟开始打字效果
        setTimeout(type, 500);
    }
}

// 页面加载完成后可以启用打字机效果（注释掉以保持静态）
// document.addEventListener('DOMContentLoaded', typewriterEffect);

// 浏览器兼容性检查
function checkBrowserSupport() {
    // 检查是否支持 IntersectionObserver
    if (!window.IntersectionObserver) {
        console.warn('浏览器不支持 IntersectionObserver，动画效果可能无法正常工作');
        // 可以添加 polyfill 或者降级处理
    }
    
    // 检查是否支持 CSS Grid
    if (!CSS.supports('display', 'grid')) {
        console.warn('浏览器不支持 CSS Grid，布局可能会有问题');
        // 可以添加降级样式
    }
}

// 执行兼容性检查
document.addEventListener('DOMContentLoaded', checkBrowserSupport);

// 性能优化：图片懒加载（如果添加了真实图片的话）
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    } else {
        // 降级处理
        images.forEach(img => {
            img.src = img.dataset.src;
        });
    }
}

// 页面加载完成后初始化懒加载
document.addEventListener('DOMContentLoaded', initLazyLoading); 