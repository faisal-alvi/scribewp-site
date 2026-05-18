import React, { useEffect } from 'react';
import EditorMockup from '@/components/EditorMockup';
import Icon from '@/lib/Icons';
import { fetchFreemiusConfig } from '@/lib/freemius';
import { openFreemiusModal } from '@/lib/fsClient';

// Reveal-on-scroll wired up here so it runs after all sections mount
function useReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('is-in'); obs.unobserve(e.target); }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -8% 0px' });
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

async function handleFreemiusPlan(planKey) {
  try {
    const cfg = await fetchFreemiusConfig();
    const public_key = cfg?.public_key ?? null;
    const product_id = cfg?.product_id ?? null;
    const plan_id = cfg?.plans?.[planKey] ?? null;
    if (!product_id || !plan_id) {
      console.warn('Freemius config missing ids:', { product_id, plan_id });
      return;
    }
    await openFreemiusModal({ product_id, plan_id, public_key, name: 'ScribeWP', licenses: 1 });
  } catch (err) {
    console.error('Freemius error:', err);
  }
}

export default function HomePage() {
  useReveal();
  return (
    <>
      {/* Hero */}
      <header className="hero" id="top">
        <div className="hero-bg"></div>
        <div className="container hero-inner">
          <div className="eyebrow reveal">
            <span className="pill">New</span>
            <span>GPT-4o &amp; Claude support — <b>shipping now</b></span>
          </div>
          <h1 className="reveal">
            AI writing, <span className="serif grad">inside</span><br />
            the WordPress editor.
          </h1>
          <p className="hero-sub reveal">
            ScribeWP plugs straight into Gutenberg so you can draft posts, expand outlines, and rewrite paragraphs without ever leaving WordPress. Free to install, no card required.
          </p>
          <div className="hero-ctas reveal">
            <a className="btn btn-primary btn-lg" href="#pricing">
              <Icon.Sparkle style={{ width: 15, height: 15 }} />
              Install free on WordPress
              <Icon.Arrow className="btn-arrow" />
            </a>
            <a className="btn btn-ghost btn-lg" href="#how">Watch how it works</a>
          </div>
          <div className="hero-meta reveal">
            <span><span className="dot"></span>Free forever plan</span>
            <span><span className="dot"></span>Works with your OpenAI key</span>
            <span><span className="dot"></span>GPL-2.0 licensed</span>
          </div>
          <EditorMockup />
        </div>
      </header>

      {/* Logo bar */}
      <section className="container">
        <div className="logobar">
          <div className="logobar-label">Powering content teams at 5,000+ WordPress sites</div>
          <div className="logobar-grid">
            {["Driftwood", "Northpine", "Lumen & Co.", "OrbitMag", "Halftone"].map((n, i) => (
              <div className="logo-cell" key={i}>
                <span className="lname" style={{ fontFamily: i % 2 ? "'Instrument Serif', serif" : "'Geist', sans-serif", fontStyle: i % 2 ? 'italic' : 'normal' }}>{n}</span>
              </div>
            ))}
          </div>
          <div className="stat-bar">
            <div className="stat"><div className="stat-n"><span className="grad">5,000+</span></div><div className="stat-l">Active installs</div></div>
            <div className="stat"><div className="stat-n">4.9<span style={{ color: 'var(--fg-3)', fontSize: 18 }}>/5</span></div><div className="stat-l">★★★★★ on WordPress.org</div></div>
            <div className="stat"><div className="stat-n">2.4M</div><div className="stat-l">Words generated weekly</div></div>
            <div className="stat"><div className="stat-n">68%</div><div className="stat-l">Faster time-to-publish</div></div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section container" id="features">
        <div className="section-head reveal">
          <div className="section-tag"><span className="dot"></span>Features</div>
          <h2>Everything you need to publish, nothing you don't.</h2>
          <p className="section-lead">A focused toolkit for WordPress writers — no bloated dashboards, no plugin sprawl. Just the controls you reach for every day, where you already write.</p>
        </div>
        <div className="features reveal">
          <article className="feature feat-1">
            <div className="feature-icon"><Icon.Sparkle /></div>
            <h3>AI content generation that sounds like you</h3>
            <p>Draft full posts from a topic, expand bullet lists into paragraphs, or rewrite a tired intro. Set a tone, length, and outline once — Scribe keeps your voice consistent across every post.</p>
            <div className="feature-vis">
              <div className="vis-typing">
                <div style={{ color: 'var(--fg-3)', fontSize: 11.5, marginBottom: 8 }} className="mono">/rewrite — punchier, friendlier</div>
                <div>You'll save <span className="grad">hours every week</span> on first-draft work — and your editor will thank you.<span className="typing-cursor"></span></div>
              </div>
            </div>
          </article>
          <article className="feature feat-2">
            <div className="feature-icon"><Icon.Blocks /></div>
            <h3>Native Gutenberg sidebar</h3>
            <p>Lives inside the block editor as a proper panel — no iframes, no clunky modals.</p>
            <div className="feature-vis">
              <div className="vis-blocks">
                <div className="bl"><span className="h"></span>Heading</div>
                <div className="bl is-active"><span className="h"></span>ScribeWP — generating…</div>
                <div className="bl"><span className="h"></span>Paragraph</div>
              </div>
            </div>
          </article>
          <article className="feature feat-3">
            <div className="feature-icon"><Icon.Bulk /></div>
            <h3>Bulk post creation</h3>
            <p>Queue 50 outlines from a CSV. Wake up to 50 drafts, neatly slugged and scheduled.</p>
            <div className="feature-vis">
              <div className="vis-bulk">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div key={i} className={`b ${i < 7 ? 'is-done' : ''}`}>
                    <span className="bar t"></span><span className="bar m"></span>
                  </div>
                ))}
              </div>
            </div>
          </article>
          <article className="feature feat-4">
            <div className="feature-icon"><Icon.Seo /></div>
            <h3>SEO-aware out of the box</h3>
            <p>Real-time scoring for keyword density, meta length, readability — wired to RankMath &amp; Yoast.</p>
            <div className="feature-vis">
              <div className="vis-seo">
                <div className="seo-score"><span>89</span></div>
                <div className="seo-meta">
                  <div className="seo-row"><span>Readability</span><div className="seo-bar"><i style={{ width: '92%' }}></i></div></div>
                  <div className="seo-row"><span>Keyword fit</span><div className="seo-bar"><i style={{ width: '78%' }}></i></div></div>
                  <div className="seo-row"><span>Meta length</span><div className="seo-bar"><i style={{ width: '85%' }}></i></div></div>
                </div>
              </div>
            </div>
          </article>
          <article className="feature feat-5">
            <div className="feature-icon"><Icon.Tone /></div>
            <h3>Tone &amp; brand voice</h3>
            <p>Define a house style once. Scribe re-applies it on every draft, comment reply, or excerpt.</p>
            <div className="feature-vis">
              <div className="vis-tones">
                <span className="tone is-on">Warm</span>
                <span className="tone is-on">Expert</span>
                <span className="tone">Witty</span>
                <span className="tone">Punchy</span>
                <span className="tone">Earnest</span>
                <span className="tone">Reassuring</span>
                <span className="tone">+ Custom</span>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* How it works */}
      <section className="section container" id="how" style={{ paddingTop: 60 }}>
        <div className="section-head reveal">
          <div className="section-tag"><span className="dot"></span>How it works</div>
          <h2>Live in the editor in under 3 minutes.</h2>
          <p className="section-lead">No new platform to learn, no content to migrate. If you can install a plugin, you can install ScribeWP.</p>
        </div>
        <div className="steps reveal">
          <div className="step">
            <div className="step-n"><span className="num">1</span>STEP ONE</div>
            <h3>Install the plugin</h3>
            <p>Search "ScribeWP" in your WordPress dashboard and click Install. It's free, GPL-licensed, and lives on WordPress.org alongside the plugins you already trust.</p>
            <div className="step-vis">
              <div className="install-card">
                <div className="install-icon">S</div>
                <div className="install-meta"><div className="t">ScribeWP — AI Writer</div><div className="s">5,000+ active · Updated 3 days ago</div></div>
                <div className="install-btn">Install now</div>
              </div>
            </div>
          </div>
          <div className="step">
            <div className="step-n"><span className="num">2</span>STEP TWO</div>
            <h3>Connect your API key</h3>
            <p>Paste your OpenAI or Anthropic key once. Your key stays on your server — Scribe never proxies your prompts through a third-party.</p>
            <div className="step-vis">
              <div className="key-card">
                <div><div className="lbl">OpenAI API</div><div className="val">sk-•••• •••• •••• 7c2a</div></div>
                <div className="key-status">Connected</div>
              </div>
            </div>
          </div>
          <div className="step">
            <div className="step-n"><span className="num">3</span>STEP THREE</div>
            <h3>Generate content</h3>
            <p>Open any post, pop the Scribe sidebar, type a topic — and watch a publish-ready draft fill the canvas, block by block.</p>
            <div className="step-vis">
              <div className="gen-log">
                <div className="l"><span className="ai-tag">AI</span><b>Outlining</b><span style={{ marginLeft: 'auto' }} className="ok">✓</span></div>
                <div className="l"><span className="ai-tag">AI</span><b>Drafting H2 sections</b><span style={{ marginLeft: 'auto' }} className="ok">✓</span></div>
                <div className="l"><span className="ai-tag">AI</span><b>Adding meta description</b><span style={{ marginLeft: 'auto' }} className="ok">✓</span></div>
                <div className="l"><span className="ai-tag">AI</span><b>Inserting blocks</b><span style={{ marginLeft: 'auto', color: 'var(--fg-3)' }}>0:02</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section container" id="pricing">
        <div className="section-head reveal">
          <div className="section-tag"><span className="dot"></span>Pricing</div>
          <h2>Simple plans. No surprises.</h2>
          <p className="section-lead">Pay for the plugin, bring your own AI keys. You're never locked into a model, and your usage costs stay transparent.</p>
        </div>
        <div className="pricing-grid reveal">
          <article className="plan">
            <div className="plan-h"><span className="plan-name">Starter</span></div>
            <p className="plan-tagline">For hobby blogs and solo writers getting started with AI.</p>
            <div className="plan-price"><span className="amt">$0</span><span className="per">forever</span></div>
            <div className="plan-note">Free on WordPress.org · no card required</div>
            <button className="plan-cta ghost" onClick={() => handleFreemiusPlan('starter')}>Install free</button>
            <ul className="plan-list">
              <li><Icon.Check style={{ color: 'var(--brand-from)' }} />Up to 10,000 AI-generated words per month</li>
              <li><Icon.Check style={{ color: 'var(--brand-from)' }} />Gutenberg sidebar &amp; quick rewrite</li>
              <li><Icon.Check style={{ color: 'var(--brand-from)' }} />GPT-4o-mini support, bring your own key</li>
              <li><Icon.Check style={{ color: 'var(--brand-from)' }} />Two tone presets</li>
              <li><Icon.Check style={{ color: 'var(--brand-from)' }} />Community support on the WP forum</li>
              <li className="muted"><Icon.Plus />Bulk generation</li>
              <li className="muted"><Icon.Plus />SEO scoring &amp; meta</li>
            </ul>
          </article>
          <article className="plan featured">
            <div className="plan-h">
              <span className="plan-name">Professional</span>
              <span className="plan-badge">Limited time</span>
            </div>
            <p className="plan-tagline">For content teams shipping multiple posts a week.</p>
            <div className="plan-price"><span className="amt">Free</span><span className="old">$35.99/yr</span></div>
            <div className="plan-note"><span className="grad">Free for the first year</span> — full Pro features, no card</div>
            <button className="plan-cta primary" onClick={() => handleFreemiusPlan('professional')}>
              Claim Professional free
            </button>
            <ul className="plan-list">
              <li><Icon.Check style={{ color: 'var(--brand-from)' }} /><b>Unlimited</b> generations (your API costs apply)</li>
              <li><Icon.Check style={{ color: 'var(--brand-from)' }} />GPT-4o, GPT-4.1 &amp; Claude 3.7 Sonnet</li>
              <li><Icon.Check style={{ color: 'var(--brand-from)' }} />Bulk post creation from CSV</li>
              <li><Icon.Check style={{ color: 'var(--brand-from)' }} />SEO scoring &amp; auto-meta (RankMath / Yoast)</li>
              <li><Icon.Check style={{ color: 'var(--brand-from)' }} />Custom brand-voice training</li>
              <li><Icon.Check style={{ color: 'var(--brand-from)' }} />Image generation &amp; alt-text</li>
              <li><Icon.Check style={{ color: 'var(--brand-from)' }} />Priority email support</li>
            </ul>
          </article>
        </div>
        <p className="pricing-footnote">Payments handled securely by Freemius · 14-day refund · Cancel anytime</p>
      </section>

      {/* Testimonials */}
      <section className="section container" id="testimonials" style={{ paddingTop: 60 }}>
        <div className="section-head reveal">
          <div className="section-tag"><span className="dot"></span>Customers</div>
          <h2>Loved by writers, not just executives.</h2>
          <p className="section-lead">4.9 stars across hundreds of reviews on WordPress.org — from solo bloggers to multi-author publications.</p>
        </div>
        <div className="quotes reveal">
          {[
            { stars: 5, text: "I went from one post a week to three, without losing my voice. The Gutenberg sidebar is just… exactly where I want it.", n: "Maya Okafor", r: "Founder, The Slow Weeknight", i: "MO" },
            { stars: 5, text: "Bulk mode paid for the plugin in an afternoon. Generated 40 location pages for a client, polished each in 15 minutes.", n: "Daniel Ortiz", r: "Freelance content strategist", i: "DO" },
            { stars: 5, text: "Finally an AI plugin that respects WordPress conventions. No weird dashboards, no third-party proxy — it just behaves.", n: "Sara Lindqvist", r: "Editor-in-chief, OrbitMag", i: "SL" },
          ].map((q, i) => (
            <div className="quote" key={i}>
              <div className="stars">{Array.from({ length: q.stars }).map((_, k) => <Icon.Star key={k} style={{ width: 14, height: 14 }} />)}</div>
              <blockquote>"{q.text}"</blockquote>
              <div className="quote-author">
                <div className="avatar">{q.i}</div>
                <div><div className="n">{q.n}</div><div className="r">{q.r}</div></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="container">
        <div className="final reveal">
          <div className="final-inner">
            <div className="section-tag"><span className="dot"></span>Get started</div>
            <h2>Your next post is already <span className="serif grad">halfway written.</span></h2>
            <p>Install ScribeWP free and try Professional on us for a year. No card, no commitment.</p>
            <div className="hero-ctas" style={{ marginBottom: 0 }}>
              <button className="btn btn-primary btn-lg" onClick={() => handleFreemiusPlan('starter')}>
                <Icon.Sparkle style={{ width: 15, height: 15 }} />
                Install on WordPress
                <Icon.Arrow className="btn-arrow" />
              </button>
              <a className="btn btn-ghost btn-lg" href="mailto:hello@scribewp.com">Book a 15-min walkthrough</a>
            </div>
            <div className="final-meta">
              <span><span style={{ width: 4, height: 4, borderRadius: 999, background: 'var(--fg-4)', display: 'inline-block', marginRight: 7, verticalAlign: 'middle' }}></span>Free forever plan</span>
              <span><span style={{ width: 4, height: 4, borderRadius: 999, background: 'var(--fg-4)', display: 'inline-block', marginRight: 7, verticalAlign: 'middle' }}></span>Works with OpenAI &amp; Anthropic</span>
              <span><span style={{ width: 4, height: 4, borderRadius: 999, background: 'var(--fg-4)', display: 'inline-block', marginRight: 7, verticalAlign: 'middle' }}></span>GPL-2.0 open source</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
