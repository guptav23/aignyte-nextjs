'use client';

import Link from 'next/link';
import { useModal } from '@/context/ModalContext';
import type { BlogPost } from '@/data/blogPosts';
import styles from './ArticlePage.module.css';

// Article content keyed by slug
function ArticleContent({ slug }: { slug: string }) {
  if (slug === 'why-ab-testing-is-lying-to-you') return <AbTestingArticle />;
  if (slug === 'right-message-right-customer') return <RightMessageArticle />;
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

function RightMessageArticle() {
  return (
    <div className={styles.articleWrap}>
      {/* Intro */}
      <div className={styles.scene}>
        <p>&ldquo;Right message, right customer, right time.&rdquo; Everyone in direct marketing has heard this. Most companies have tried to act on it. Most have been surprised when it either didn&apos;t work, or worked briefly and stopped.</p>
        <p>The problem isn&apos;t the idea. The problem is that most systems treat those three variables as fixed and independent when they&apos;re neither. They&apos;re dynamic. They interact. What&apos;s right for a customer today isn&apos;t right for that same person next month, or even next week.</p>
        <p className={styles.sceneBreak}>Think about how Netflix recommends content. A static preference map would be useless: it would ignore what you&apos;ve already watched, ignore what you&apos;ve been shown five times without clicking, ignore that your Friday night mood is nothing like Tuesday morning. The reason a recommendation engine works is that it never stops reading new signals. Direct marketing is the same problem. The question is what it actually takes to solve it.</p>
      </div>

      <hr className={styles.flawDivider} />

      {/* Section 1 */}
      <div className={styles.flawBlock}>
        <div className={styles.flawHeader}>
          <span className={styles.flawNum}>1</span>
          <div className={styles.flawHeaderText}>
            <span className={styles.flawLabel}>Why &ldquo;More Dynamic&rdquo; Segmentation Still Isn&apos;t the Answer</span>
            <h3>Granularity doesn&apos;t fix a group-level problem</h3>
          </div>
        </div>
        <div className={styles.flawBody}>
          <p>The first instinct, once you accept that static approaches don&apos;t work, is to make segments less static. Update them more often. Add more variables. Split &ldquo;lapsed high-value&rdquo; into &ldquo;lapsed high-value price-sensitive&rdquo; and &ldquo;lapsed high-value timing-missed.&rdquo; This is marginal progress. It doesn&apos;t solve the underlying problem.</p>
          <p>Segmentation is a group-level decision. No matter how granular you make it, you&apos;re deciding what to show a type of customer and applying that to the individuals who fall into the category. Two customers in the same micro-segment have different histories with your brand, different recent behaviours, different points in their journey. The segment can&apos;t know that one opened your last three emails without clicking while the other hasn&apos;t engaged in four months. Those signals belong to individuals, not categories.</p>
          <p>The operational cost compounds this. More segments means more creative, more testing, more rules to maintain. A/B testing a new offer across five segments means ten variants, five holdout groups, weeks of runtime before you have usable signal. The complexity grows faster than the returns do.</p>
          <div className={styles.dmMirror}>
            <span className={styles.dmMirrorLabel}>In your campaigns, this looks like</span>
            <p>A customer moves from &ldquo;high-value prospect&rdquo; to &ldquo;first-time buyer&rdquo; mid-campaign. The segment logic wasn&apos;t built for the transition. They receive an acquisition offer the day after their first purchase, contradicting the behaviour you wanted to reward. <strong>The rule was right for the segment. It was wrong for the person.</strong></p>
          </div>
        </div>
      </div>

      <hr className={styles.flawDivider} />

      {/* Section 2 */}
      <div className={styles.flawBlock}>
        <div className={styles.flawHeader}>
          <span className={styles.flawNum}>2</span>
          <div className={styles.flawHeaderText}>
            <span className={styles.flawLabel}>What &ldquo;Truly Dynamic&rdquo; Actually Requires</span>
            <h3>Two types of signal — and most systems only read one</h3>
          </div>
        </div>
        <div className={styles.flawBody}>
          <p>A truly dynamic system has to operate at the individual level. And it has to read two types of signal that segments can&apos;t capture together.</p>
          <p>The first belongs to the customer: what messages they&apos;ve received, what they&apos;ve responded to, what they&apos;ve ignored, and how that pattern has shifted over time. A customer who responded to urgency-based messaging six months ago but has stopped engaging is telling you something. One who&apos;s opened four emails without clicking is telling you something different from one who hasn&apos;t opened at all. These signals don&apos;t exist at the segment level because no two customers have the same history.</p>
          <p>The second belongs to the world around the customer. Interest rates move. A competitor launches an aggressive acquisition campaign. A season turns. These aren&apos;t customer-level signals, but they change what the right message is just as much as anything in the customer&apos;s own history. A mortgage offer that was compelling at 7% rates needs a different conversation when rates have shifted. A customer you share with a competitor running heavy promotions is in a different decision context than they were last month.</p>
          <p>Most personalisation systems address one of these signal types and not the other. That&apos;s why even &ldquo;dynamic&rdquo; programs still leave significant lift on the table.</p>
          <div className={styles.dmMirror}>
            <span className={styles.dmMirrorLabel}>In your campaigns, this looks like</span>
            <p>Your lending competitor drops rates by 50 basis points. The urgency message that was working last week is now second-best. A segment-based system keeps sending the same creative until your next review cycle. <strong>An individual-level system shifts immediately, because the context around each decision has changed.</strong></p>
          </div>
        </div>
      </div>

      <hr className={styles.flawDivider} />

      {/* Section 3 */}
      <div className={styles.flawBlock}>
        <div className={styles.flawHeader}>
          <span className={styles.flawNum}>3</span>
          <div className={styles.flawHeaderText}>
            <span className={styles.flawLabel}>What Changes at the Individual Level</span>
            <h3>Recalibration, not just optimisation</h3>
          </div>
        </div>
        <div className={styles.flawBody}>
          <p>Once you&apos;re making decisions at the individual level, two things become possible that weren&apos;t before.</p>
          <p>The first is genuine recalibration. Not optimising harder in one direction, but changing direction as the situation changes. A customer who was responding to one message type and has stopped gets a different approach. A context that made one creative effective and has since shifted gets a different creative. The system isn&apos;t finding the best answer to a fixed question. It&apos;s continuously reassessing what the right question is.</p>
          <p>The second is compounding learning. Every interaction is a data point about what worked for this specific person, in this specific context. A segment-level system gets better at picking the right message for a type of customer. An individual-level system gets better at picking the right message for this customer, right now.</p>
        </div>
      </div>

      <hr className={styles.flawDivider} />

      {/* Section 4 */}
      <div className={styles.flawBlock}>
        <div className={styles.flawHeader}>
          <span className={styles.flawNum}>4</span>
          <div className={styles.flawHeaderText}>
            <span className={styles.flawLabel}>Why AIgnyte Changes This</span>
            <h3>A system designed to keep redirecting itself</h3>
          </div>
        </div>
        <div className={styles.flawBody}>
          <p>AIgnyte operates at the individual level. It doesn&apos;t assign customers to categories and map those categories to messages. It makes a separate decision for each person, based on their full interaction history alongside the external context surrounding that decision.</p>
          <p>It recalibrates rather than just optimises. When a customer&apos;s behaviour shifts, the system shifts with them. When external conditions change, so does what the system does. It isn&apos;t getting better at the same answer. It&apos;s continuously reassessing what the right answer is.</p>
          <p>The result is sustained lift. Not a one-time improvement from a better creative test, but a system that keeps getting more precise because it never stops learning.</p>
        </div>
      </div>

      {/* Closing prose */}
      <div className={styles.prose}>
        <h2>The goal was always right. The system just wasn&apos;t built for it.</h2>
        <p>Right message, right customer, right time was always the correct framing. The gap was never in the ambition. It was in what the tools could do. Treating dynamic, interconnected variables as fixed and independent was a pragmatic compromise, not a strategic choice. Programs that plateau, creative tests that don&apos;t hold in production, rules that worked in January but not June: these aren&apos;t execution problems. They&apos;re the ceiling of a static system applied to a dynamic problem.</p>
        <p>That ceiling is removable. Individual-level decisioning, reading both the customer&apos;s history and the world around them and recalibrating continuously, changes what&apos;s possible. Not marginally. Fundamentally.</p>
      </div>

      {/* Summary */}
      <div className={styles.landingStatement}>
        <p>
          Static systems pick a message <em>for a type of customer</em>.<br />
          Dynamic systems pick the right message <em>for this customer, right now</em>.<br />
          The difference compounds with every interaction.
        </p>
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
          <h1 dangerouslySetInnerHTML={{ __html: post.titleHtml ?? post.title }} />
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
          <h2>{post.ctaH2 ?? 'What would your campaigns look like with Message Decisioning?'}</h2>
          <p>{post.ctaPara ?? 'Talk to us about how Message Decisioning works for your program — and what response lift you\'re currently leaving on the table.'}</p>
          <button className="btn-primary" onClick={openLetsTalk}>Let&apos;s Talk</button>
        </div>
      </div>
    </>
  );
}
