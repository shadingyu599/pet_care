"use client";

import { FormEvent, SyntheticEvent, useEffect, useState } from "react";

const environmentContent = [
  {
    title: "高端接待与可视洗护区",
    copy: "温润木饰面、低噪动线和透明护理窗口，主人能安心等待。",
    src: "https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?auto=format&fit=crop&w=1400&q=84",
    fallback:
      "https://images.unsplash.com/photo-1591946614720-90a587da4a36?auto=format&fit=crop&w=1400&q=84",
    alt: "高端宠物洗护店接待区与可视化洗护窗口",
    dotLabel: "查看接待区"
  },
  {
    title: "独立恒温洗护区",
    copy: "分区浴缸、柔和照明和消毒收纳，让猫狗洗护更有秩序。",
    src: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=1400&q=84",
    fallback:
      "https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?auto=format&fit=crop&w=1400&q=84",
    alt: "明亮整洁的宠物洗护区与独立浴缸",
    dotLabel: "查看洗护区"
  },
  {
    title: "安静烘干与美容工位",
    copy: "可调温烘干、独立美容台和舒缓色调，减少敏感宠物压力。",
    src: "https://images.unsplash.com/photo-1591946614720-90a587da4a36?auto=format&fit=crop&w=1400&q=84",
    fallback:
      "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=1400&q=84",
    alt: "安静舒适的宠物烘干护理区与美容工位",
    dotLabel: "查看烘干护理区"
  }
];

export default function PetCarePage() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % environmentContent.length);
    }, 4200);

    return () => window.clearInterval(timer);
  }, []);

  function handleImageError(event: SyntheticEvent<HTMLImageElement>) {
    const image = event.currentTarget;
    const fallback = image.dataset.fallback;

    if (fallback && image.src !== fallback) {
      image.src = fallback;
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    window.alert("预约信息已记录，店员会尽快联系您确认时间。");
  }

  const activeEnvironment = environmentContent[activeSlide];

  return (
    <>
      <header className="nav">
        <a className="brand" href="#top" aria-label="沐爪宠物洗护店首页">
          <span className="brand-mark">爪</span>
          <span>沐爪宠物洗护</span>
        </a>
        <nav className="nav-links" aria-label="主导航">
          <a href="#services">服务项目</a>
          <a href="#experience">洗护环境</a>
          <a href="#booking">在线预约</a>
          <a href="#info">门店信息</a>
        </nav>
        <a className="nav-cta" href="#booking">
          预约洗护
        </a>
      </header>

      <main id="top">
        <section className="hero" aria-label="宠物洗护店介绍">
          <div className="hero-inner">
            <div className="hero-copy">
              <span className="eyebrow">独立烘干间 · 猫狗分区 · 可视洗护</span>
              <h1>沐爪宠物洗护店</h1>
              <p>
                给毛孩子一次干净、温和、安心的护理体验。从基础洗澡到造型修剪，每一步都按品种、毛量和性格调整。
              </p>
              <div className="hero-actions">
                <a className="button" href="#booking">
                  立即预约
                </a>
                <a className="button secondary" href="#services">
                  查看价目
                </a>
              </div>
              <div className="stats" aria-label="门店数据">
                <div className="stat">
                  <strong>45min</strong>
                  <span>小型犬基础洗护起</span>
                </div>
                <div className="stat">
                  <strong>1对1</strong>
                  <span>美容师全程跟进</span>
                </div>
                <div className="stat">
                  <strong>24h</strong>
                  <span>预约提醒和回访</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="services" id="services">
          <div className="section-inner">
            <div className="section-head">
              <h2>常用洗护服务</h2>
              <p>价格会根据体型、毛结、毛量和配合程度微调，到店前可先发照片快速估价。</p>
            </div>
            <div className="service-grid">
              <article className="service-card">
                <div className="service-icon" aria-hidden="true">
                  泡
                </div>
                <h3>基础香波洗护</h3>
                <p>清洁、护毛素、吹干、脚底毛、耳道基础清洁和指甲修剪。</p>
                <div className="price">¥68 起</div>
              </article>
              <article className="service-card">
                <div className="service-icon" aria-hidden="true">
                  剪
                </div>
                <h3>美容造型修剪</h3>
                <p>泰迪、比熊、博美等常见造型，可按日常易打理或精致风格定制。</p>
                <div className="price">¥168 起</div>
              </article>
              <article className="service-card">
                <div className="service-icon" aria-hidden="true">
                  护
                </div>
                <h3>皮毛舒缓护理</h3>
                <p>适合换季掉毛、皮肤敏感、毛发干枯的宠物，使用低刺激护理流程。</p>
                <div className="price">¥128 起</div>
              </article>
              <article className="service-card">
                <div className="service-icon" aria-hidden="true">
                  猫
                </div>
                <h3>猫咪专属洗护</h3>
                <p>猫咪独立时段、低噪烘干、减少等待，按猫咪情绪控制护理节奏。</p>
                <div className="price">¥158 起</div>
              </article>
            </div>
          </div>
        </section>

        <section className="experience" id="experience">
          <div className="section-inner split">
            <div className="environment-carousel" aria-label="宠物洗护店内环境轮播">
              {environmentContent.map((environment, index) => (
                <figure
                  className={`environment-slide${activeSlide === index ? " is-active" : ""}`}
                  key={environment.title}
                >
                  <img
                    src={environment.src}
                    data-fallback={environment.fallback}
                    alt={environment.alt}
                    onError={handleImageError}
                  />
                </figure>
              ))}
              <div className="environment-caption">
                <div>
                  <strong>{activeEnvironment.title}</strong>
                  <span>{activeEnvironment.copy}</span>
                </div>
                <div className="carousel-dots" aria-label="切换店内环境照片">
                  {environmentContent.map((environment, index) => (
                    <button
                      className={`carousel-dot${activeSlide === index ? " is-active" : ""}`}
                      key={environment.dotLabel}
                      type="button"
                      aria-label={environment.dotLabel}
                      onClick={() => setActiveSlide(index)}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div>
              <div className="section-head">
                <h2>更适合敏感宠物的洗护节奏</h2>
              </div>
              <p>
                我们不追求流水线速度。第一次到店会先做触摸适应，确认毛结、皮肤、耳朵和脚垫状态，再安排洗护步骤。
              </p>
              <ul className="check-list">
                <li>
                  <span className="check">✓</span>
                  <span>洗护前记录皮肤、毛结、耳道和指甲状态，服务后同步给主人。</span>
                </li>
                <li>
                  <span className="check">✓</span>
                  <span>猫狗分区护理，减少陌生气味和噪音带来的压力。</span>
                </li>
                <li>
                  <span className="check">✓</span>
                  <span>使用独立毛巾、消毒梳具和可调温烘干设备。</span>
                </li>
                <li>
                  <span className="check">✓</span>
                  <span>可预约单宠时段，适合胆小、老年或术后恢复期宠物。</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="booking" id="booking">
          <div className="section-inner">
            <div className="section-head">
              <h2>预约到店时间</h2>
              <p>提交后店员会在营业时间内联系确认。紧急洗护建议直接电话沟通。</p>
            </div>
            <div className="booking-layout">
              <aside className="hours" aria-label="营业时间">
                <div className="hour-row">
                  <span>周一至周五</span>
                  <strong>10:00 - 20:00</strong>
                </div>
                <div className="hour-row">
                  <span>周六至周日</span>
                  <strong>09:30 - 21:00</strong>
                </div>
                <div className="hour-row">
                  <span>联系电话</span>
                  <strong>021-8888 6622</strong>
                </div>
                <div className="hour-row">
                  <span>门店地址</span>
                  <strong>上海市静安区梧桐路 88 号</strong>
                </div>
              </aside>
              <form action="#" method="post" onSubmit={handleSubmit}>
                <label>
                  主人姓名
                  <input type="text" name="name" placeholder="请输入姓名" autoComplete="name" />
                </label>
                <label>
                  联系电话
                  <input type="tel" name="phone" placeholder="手机号码" autoComplete="tel" />
                </label>
                <label>
                  宠物类型
                  <select name="pet">
                    <option>小型犬</option>
                    <option>中大型犬</option>
                    <option>猫咪</option>
                    <option>其他宠物</option>
                  </select>
                </label>
                <label>
                  预约服务
                  <select name="service">
                    <option>基础香波洗护</option>
                    <option>美容造型修剪</option>
                    <option>皮毛舒缓护理</option>
                    <option>猫咪专属洗护</option>
                  </select>
                </label>
                <label>
                  期望日期
                  <input type="date" name="date" />
                </label>
                <label>
                  期望时段
                  <select name="time">
                    <option>上午</option>
                    <option>下午</option>
                    <option>晚上</option>
                  </select>
                </label>
                <label className="wide">
                  宠物情况
                  <textarea name="notes" placeholder="例如：6kg 比熊，有轻微毛结，比较怕吹风。" />
                </label>
                <p className="form-note wide">演示页面不会真正提交表单，可接入微信、电话或后台预约系统。</p>
                <button className="button wide" type="submit">
                  提交预约
                </button>
              </form>
            </div>
          </div>
        </section>

        <section className="shop-info" id="info">
          <div className="section-inner">
            <div className="section-head">
              <h2>到店前你会想知道的事</h2>
              <p>清晰沟通能让宠物更放松，也能让护理结果更稳定。</p>
            </div>
            <div className="info-grid">
              <article className="info-card">
                <h3>需要带什么</h3>
                <p>首次到店建议带常用牵引、疫苗记录和宠物平时爱吃的小零食。</p>
              </article>
              <article className="info-card">
                <h3>洗护前提醒</h3>
                <p>到店前 2 小时尽量不喂太饱，皮肤病或术后恢复请提前说明。</p>
              </article>
              <article className="info-card">
                <h3>会员权益</h3>
                <p>储值会员享生日护理、免费脚底毛修剪和节假日优先预约。</p>
              </article>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <span>© 2026 沐爪宠物洗护店</span>
        <span>干净、温柔、可预约的宠物护理空间</span>
      </footer>
    </>
  );
}
