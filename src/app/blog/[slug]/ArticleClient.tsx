'use client';

import Link from 'next/link';
import { useModal } from '@/context/ModalContext';
import type { BlogPost } from '@/data/blogPosts';
import styles from './ArticlePage.module.css';

// Article content keyed by slug
function ArticleContent({ slug }: { slug: string }) {
  if (slug === 'why-ab-testing-is-lying-to-you') {
    return <AbTestingArticle />;
  }
  return null;
}

function AbTestingArticle() {
  return (
    <div className={styles.articleWrap}>
      {/* Scene setter */}
      <div className={styles.scene}>
        <p>The test results are in. Creative B beat Creative A by 18%. Statistically significant. Clean data. You retire A, roll B to your full list, and move on.</p>
        <p>You just sent the wrong message to most of your audience — and your data told you it was the right one.</p>
        <p className={styles.sceneBreak}>This happens every campaign cycle. Here are the three reasons why.</p>
      </div>

      {/* Flaw 1 */}
      <div className={styles.flawBlock}>
        <div className={styles.flawHeader}>
          <span className={styles.flawNum}>1</span>
          <div className={styles.flawHeaderText}>
            <span className={styles.flawLabel}>The Fundamental Flaw</span>
            <h3>Your &ldquo;winner&rdquo; is right for the average person — who doesn&apos;t exist on your list</h3>
          </div>
        </div>
        <div className={styles.flawBody}>
          <p>Even a perfectly run A/B test produces one output: the creative that performed best on average across your test population. You then apply that winner to every individual in your mailing list.</p>
          <p>But no one in your list is average. Every person carries a distinct mix of motivations, sensitivities, and message preferences. Some respond to urgency. Others to aspiration. Some to simplicity, others to detail. Your winning creative matched the aggregate. It is almost certainly the wrong message for the majority of individuals within it.</p>
          <p>Every person who would have responded to the creative you just retired — and there are meaningful numbers of them — will now receive a message that doesn&apos;t resonate. They won&apos;t respond. You won&apos;t know why. You&apos;ll assume the offer wasn&apos;t right, or the timing was off, or the list was cold.</p>
          <div className={styles.dmMirror}>
            <span className={styles.dmMirrorLabel}>In your campaigns, this looks like</span>
            <p>Creative B beats Creative A by 18%. You retire A. But for a real segment of your list, <strong>Creative A was the stronger message</strong> — they simply don&apos;t respond to what B offers. You&apos;ve permanently closed off their path to response. That revenue is gone, and your data will never show you what you lost.</p>
          </div>
        </div>
      </div>
      <hr className={styles.flawDivider} />

      {/* Flaw 2 */}
      <div className={styles.flawBlock}>
        <div className={styles.flawHeader}>
          <span className={styles.flawNum}>2</span>
          <div className={styles.flawHeaderText}>
            <span className={styles.flawLabel}>The Hidden Inflation</span>
            <h3>You&apos;re measuring novelty. You&apos;re calling it lift.</h3>
          </div>
        </div>
        <div className={styles.flawBody}>
          <p>This is the flaw that causes the most financial damage, because it inflates your results and leads you to build forecasts on a number that will never appear in production.</p>
          <p>When you introduce a new creative to an audience that has never seen it, you aren&apos;t measuring steady-state response. You&apos;re measuring the release of accumulated, suppressed demand.</p>
          <p>Picture your prospect universe as two groups: those who respond to your existing creatives, and those who <em>would</em> respond to a different message — but never have, because you&apos;ve never sent it. That second group has been building latent demand like a coiled spring. The moment you introduce the new creative in a test, that demand releases. Response spikes. You measure the spike, call it the creative&apos;s lift, and build your business case on it.</p>
          <p>Then you roll out. The latent demand normalises. Response settles far below the test result. You call it test-to-rollout variance and move on. It isn&apos;t variance. It will happen again with the next new creative. <strong>Every new creative you test is measuring a one-time event and presenting it as a repeatable one.</strong></p>
          <div className={styles.dmMirror}>
            <span className={styles.dmMirrorLabel}>In your campaigns, this looks like</span>
            <p>Your new creative tests at <strong>+40% response lift</strong>. You project that into your annual plan. Production delivers +12%. The gap gets written off as execution issues or list quality. The real cause — latent demand normalisation — will repeat identically with your next test.</p>
          </div>
        </div>
      </div>
      <hr className={styles.flawDivider} />

      {/* Flaw 3 */}
      <div className={styles.flawBlock}>
        <div className={styles.flawHeader}>
          <span className={styles.flawNum}>3</span>
          <div className={styles.flawHeaderText}>
            <span className={styles.flawLabel}>The Quiet Distortion</span>
            <h3>Your test population isn&apos;t your production population</h3>
          </div>
        </div>
        <div className={styles.flawBody}>
          <p>In practice, A/B tests are rarely run on a perfectly representative sample. They&apos;re run on whoever is convenient — your most engaged customers, a specific geography, your most recent acquirees, a segment with clean data. Your result is accurate for that population. It doesn&apos;t reliably transfer to everyone you&apos;ll be mailing when you roll out.</p>
          <p>Newly acquired customers behave very differently from an established book. High-engagement segments respond very differently from your average prospect. When your test population skews — even subtly — your winner is a winner for the wrong audience. You won&apos;t notice until you&apos;re already committed to the rollout.</p>
          <div className={styles.dmMirror}>
            <span className={styles.dmMirrorLabel}>In your campaigns, this looks like</span>
            <p>You test on your <strong>most responsive segment</strong> because the data is cleaner and significance comes faster. The winning creative rolls to your full prospect universe. Response disappoints. You assume the creative is weakening with fatigue. <strong>It was never as strong as you measured</strong> — because you never measured it on the people you&apos;d actually be mailing.</p>
          </div>
        </div>
      </div>

      {/* Case study */}
      <div className={styles.caseBlock}>
        <div className={styles.caseHeader}>
          <span className={styles.caseHeaderLabel}>Real-world evidence</span>
          <span className={styles.caseHeaderTitle}>All three flaws. One $50M+ mistake.</span>
        </div>
        <div className={styles.caseBody}>
          <p>A large financial institution piloted a new &ldquo;relationship manager&rdquo; model — one dedicated contact per customer, with a complete view of their financial picture. The goal: increase cross-sell rates and reduce attrition. The pilot ran six months. Results were extraordinary. Cross-sell rates jumped by several multiples. The business case looked airtight.</p>
          <p>They invested tens of millions in infrastructure, reorganisation, and retraining. First months post-launch mirrored the pilot. Then cross-sell rates fell — and stabilised well below forecast. At those levels, ROI was negative. After years of trying to recover the number, they abandoned the model.</p>
          <p>The pilot had been run on <strong>volunteer associates</strong> — faster learners, more motivated than the average rollout hire (Flaw 3: skewed test population). It excluded <strong>newly acquired customers</strong>, who behaved differently from the established book (Flaw 3 again). And it measured the initial release of <strong>pent-up demand</strong> from customers who had never been cross-sold this way before (Flaw 2: novelty measured as lift). The winning result was accurate. The forecast it produced was fiction.</p>
          <p>And the customers who didn&apos;t respond to the relationship model at all? They got it anyway — because there was only one winner, and it was applied to everyone. Flaw 1, at scale.</p>
        </div>
      </div>

      {/* Pull quote */}
      <blockquote className={styles.pullQuote}>
        <p>The experiment didn&apos;t fail because the methodology was sloppy. It failed because the methodology was designed to measure the wrong things — and had no mechanism to know it.</p>
      </blockquote>

      {/* Prose section */}
      <div className={styles.prose}>
        <h2>Better test design helps. It doesn&apos;t solve the problem.</h2>
        <p>The obvious response is to run better experiments — more representative samples, longer run times to let latent demand normalise, holdout groups that more closely mirror production reality. All of that reduces error. But here&apos;s what it actually requires:</p>
        <p>More representative samples means larger test populations — which means more people receiving a suboptimal creative while you wait for a result. Longer run times means weeks or months of delay before you can act on anything. Better holdout construction means more analytical overhead per campaign cycle, every cycle. And at the end of all that investment, you still have one winner. Still applied to everyone. Still optimised for the average.</p>
        <p><strong>You&apos;ve spent more time, more budget, and withheld response from a larger portion of your list — to arrive at a marginally more accurate version of the same wrong answer.</strong> The cost of better testing is real. The benefit is modest. And the fundamental flaw remains untouched.</p>
        <p>The fundamental flaw is the assumption that <strong>one message should win for everyone</strong>. As long as you&apos;re running a test to select a single creative winner for your whole list, you&apos;re optimising for the average — and no one in your database is average.</p>
        <p>The question isn&apos;t how to run better A/B tests. It&apos;s why you&apos;re running them at all — when what you actually need is to match each individual to the message most likely to resonate with them specifically, without a test, without a winner, without a rollout.</p>
      </div>

      {/* Landing statement */}
      <div className={styles.landingStatement}>
        <p>
          A/B testing picks a winner <em>for the average</em>.<br />
          Message Decisioning picks the right message <em>for each individual</em>.<br />
          No test. No rollout variance. No revenue left on the table.
        </p>
      </div>

      <div className={styles.prose}>
        <p>AIgnyte&apos;s Message Decisioning platform doesn&apos;t declare a creative winner — it assigns each individual in your campaign the creative most likely to resonate with them, based on their own preference signals. The three flaws above dissolve: there is no average to optimise for, no single winner to be skewed by population selection, and no novelty period to misread as sustained lift. The system learns from every individual response and applies that learning to every subsequent decision — getting sharper every campaign cycle.</p>
      </div>
    </div>
  );
}

export default function ArticleClient({ post }: { post: BlogPost }) {
  const { openLetsTalk } = useModal();

  return (
    <>
      {/* Article hero */}
      <div className={styles.hero}>
        <div className={styles.heroInner}>
          <Link href="/blog" className={styles.backLink}>← Back to Blog</Link>
          <div className={styles.articleMeta}>
            <span className={styles.articleTag}>{post.tag}</span>
            <span className={styles.articleDate}>{post.readTime}</span>
          </div>
          <h1 dangerouslySetInnerHTML={{ __html: post.title.replace('lying', '<em>lying</em>') }} />
          <p className={styles.articleDeck}>{post.deck}</p>
        </div>
      </div>

      {/* Article body */}
      <div className={styles.bodyOuter}>
        <div className={styles.bodyInner}>
          <ArticleContent slug={post.slug} />

          {/* Author */}
          <div className={styles.authorStrip}>
            <div className={styles.authorAvatar}>{post.authorInitials}</div>
            <div>
              <div className={styles.authorName}>{post.author}</div>
              <div className={styles.authorTitle}>{post.authorTitle}</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA band */}
      <div className={styles.ctaBand}>
        <div className={styles.ctaBandInner}>
          <h2>What would your campaigns look like without A/B testing?</h2>
          <p>Talk to us about how Message Decisioning works for your program — and what response lift you&apos;re currently leaving on the table.</p>
          <button className="btn-primary" onClick={openLetsTalk}>Let&apos;s Talk</button>
        </div>
      </div>
    </>
  );
}
