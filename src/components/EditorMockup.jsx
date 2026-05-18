import React, { useState, useEffect } from 'react';
import Icon from '@/lib/Icons';

const fullTitle = "The complete guide to indoor plant care in 2026";
const fullBody = "Bringing the outdoors in is more than a design trend — it's a wellbeing investment. Whether you're nursing a fussy fiddle-leaf fig or stewarding a windowsill of succulents, the right routine makes the difference between a thriving collection and a slow march of yellowing leaves.";

function wait(ms) { return new Promise(r => setTimeout(r, ms)); }

export default function EditorMockup() {
  const [phase, setPhase] = useState(0);
  const [typedTitle, setTypedTitle] = useState('');
  const [typedBody, setTypedBody] = useState('');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let cancelled = false;
    const loop = async () => {
      while (!cancelled) {
        setPhase(0); setTypedTitle(''); setTypedBody(''); setProgress(0);
        await wait(1600);
        if (cancelled) break;
        setPhase(1);
        for (let p = 0; p <= 100; p += 4) { if (cancelled) break; setProgress(p); await wait(40); }
        if (cancelled) break;
        setPhase(2);
        for (let i = 0; i <= fullTitle.length; i++) { if (cancelled) break; setTypedTitle(fullTitle.slice(0, i)); await wait(28); }
        await wait(180);
        for (let i = 0; i <= fullBody.length; i++) { if (cancelled) break; setTypedBody(fullBody.slice(0, i)); await wait(14); }
        await wait(3500);
      }
    };
    loop();
    return () => { cancelled = true; };
  }, []);

  return (
    <div className="editor-wrap reveal">
      <div className="editor">
        <div className="editor-top">
          <div className="traffic"><span></span><span></span><span></span></div>
          <div className="editor-addr"><span className="lock">🔒</span>yourblog.com / wp-admin / post-new.php</div>
          <div style={{ width: 60 }}></div>
        </div>

        <div className="editor-toolbar">
          <div className="tb-btn"><Icon.Plus style={{ width: 13, height: 13 }} /></div>
          <div className="tb-sep"></div>
          <div className="tb-btn">Paragraph</div>
          <div className="tb-sep"></div>
          <div className="tb-btn"><span style={{ fontWeight: 700 }}>B</span></div>
          <div className="tb-btn"><span style={{ fontStyle: 'italic' }}>I</span></div>
          <div className="tb-btn"><span style={{ textDecoration: 'underline' }}>U</span></div>
          <div className="tb-sep"></div>
          <div className="tb-btn is-active" style={{ gap: 4 }}>
            <span style={{ width: 12, height: 12, borderRadius: 3, background: 'linear-gradient(135deg, var(--brand-from), var(--brand-to))', display: 'inline-block' }}></span>
            ScribeWP
          </div>
          <div className="tb-spacer"></div>
          <div className="tb-btn">Save draft</div>
          <div className="tb-pub">Publish</div>
        </div>

        <div className="editor-body">
          <div className="editor-canvas">
            {phase < 2 ? (
              <>
                <div className="doc-block">
                  <span className="ai-tag">SCRIBE</span>
                  {phase === 0 ? (
                    <span>Prompt: <i className="serif" style={{ color: 'var(--editor-fg)' }}>"a thoughtful guide to indoor plant care, friendly tone, ~1200 words"</i><span className="typing-cursor"></span></span>
                  ) : (
                    <span>Generating with GPT-4o… <span className="mono" style={{ color: 'var(--editor-fg)' }}>{progress}%</span></span>
                  )}
                </div>
                {phase === 1 && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 18 }}>
                    <div className="shimmer" style={{ width: '62%' }}></div>
                    <div className="shimmer" style={{ width: '95%' }}></div>
                    <div className="shimmer" style={{ width: '88%' }}></div>
                    <div className="shimmer" style={{ width: '72%' }}></div>
                    <div className="shimmer" style={{ width: '90%', marginTop: 14 }}></div>
                    <div className="shimmer" style={{ width: '60%' }}></div>
                  </div>
                )}
              </>
            ) : (
              <>
                <h2 className="doc-title">
                  {typedTitle}
                  {typedTitle.length < fullTitle.length && <span className="typing-cursor"></span>}
                </h2>
                <p className="doc-p">
                  {typedBody}
                  {typedTitle.length === fullTitle.length && typedBody.length < fullBody.length && <span className="typing-cursor"></span>}
                </p>
                {typedBody.length === fullBody.length && (
                  <>
                    <h3 className="doc-h2">1. Read the light, not the label</h3>
                    <p className="doc-p muted">Nursery tags speak in averages. Your living room speaks in specifics: window orientation, how long the curtains stay drawn, whether a neighbouring building blocks the afternoon sun…</p>
                  </>
                )}
              </>
            )}
          </div>

          <aside className="editor-side">
            <div className="side-tabs">
              <div className="side-tab">Post</div>
              <div className="side-tab">Block</div>
              <div className="side-tab is-active">
                <span className="side-tab-mark">S</span>
                ScribeWP
              </div>
            </div>
            <div className="side-body">
              <div>
                <div className="side-h" style={{ marginBottom: 8 }}>Topic</div>
                <div className="side-input">A complete guide to indoor plant care for beginners</div>
              </div>
              <div>
                <div className="side-h" style={{ marginBottom: 8 }}>Tone</div>
                <div className="side-row">
                  <span className="chip">Friendly</span>
                  <span className="chip is-muted">Authoritative</span>
                  <span className="chip is-muted">Playful</span>
                </div>
              </div>
              <div>
                <div className="side-h" style={{ marginBottom: 8 }}>Length</div>
                <div className="side-row">
                  <span className="chip is-muted">Short</span>
                  <span className="chip">~1,200 words</span>
                  <span className="chip is-muted">Long-form</span>
                </div>
              </div>
              <div>
                <div className="side-h" style={{ marginBottom: 8 }}>SEO keywords</div>
                <div className="side-row">
                  <span className="chip">indoor plants</span>
                  <span className="chip">plant care</span>
                  <span className="chip">+ Add</span>
                </div>
              </div>
              <div className="side-cta">
                {phase === 1 ? (
                  <><span className="spinner-dot"></span> Writing…</>
                ) : (
                  <><Icon.Sparkle style={{ width: 13, height: 13 }} /> Generate post</>
                )}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
