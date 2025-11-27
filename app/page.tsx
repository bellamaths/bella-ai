// app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* 顶栏 */}
      <header className="border-b bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <span className="rounded-full bg-indigo-600 px-2 py-0.5 text-xs font-semibold text-white">
              AI
            </span>
            <span className="text-lg font-bold tracking-tight">
              BellaMaths AI
            </span>
          </Link>

          <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
            <a href="#features" className="hover:text-slate-900">
              功能特点
            </a>
            <a href="#who" className="hover:text-slate-900">
              适合谁用
            </a>
            <a href="#how" className="hover:text-slate-900">
              如何使用
            </a>

            <Link
              href="/login"
              className="rounded-full border border-slate-300 px-4 py-1.5 text-sm font-medium text-slate-800 hover:border-indigo-500 hover:text-indigo-600"
            >
              学生登录
            </Link>
          </nav>
        </div>
      </header>

      {/* 主体内容 */}
      <main className="mx-auto max-w-5xl px-4 pb-16 pt-10 md:px-6 md:pt-14">

        {/* ===================================================== */}
        {/* 🔥 Hero 区（最新版 + 新主标题） */}
        {/* ===================================================== */}
        <section className="flex flex-col items-start gap-10 md:flex-row md:items-center">
          {/* Left text */}
          <div className="flex-1 space-y-5">
            <p className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
              SPM / Form 1–5 数学 · Bella AI 学习系统
            </p>

            {/* ⭐ 新主标题 */}
            <h1 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 md:text-4xl lg:text-5xl">
              每位学生，都应该拥有一个只属于他的 AI 老师。
            </h1>

            <p className="max-w-xl text-sm leading-relaxed text-slate-600 md:text-base">
              BellaMaths AI 是你 24 小时在线的数学“小助教”。会拆概念、讲步骤、
              分析弱点、自动出练习，让学生在正式上课前就把数学基础先托高。
            </p>

            {/* 功能 bullets */}
            <div className="grid grid-cols-3 gap-3 text-xs text-slate-700 md:max-w-sm">
              <div className="flex items-center gap-1.5">
                <span className="text-base">🔍</span> 自动分析弱点
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-base">📝</span> 出题 & 讲步骤
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-base">📘</span> 自动错题本
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/chat"
                className="rounded-full bg-indigo-600 px-6 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700"
              >
                开始体验 AI 助手
              </Link>

              <Link
                href="/login"
                className="rounded-full border border-slate-300 px-6 py-2 text-sm font-semibold text-slate-800 hover:border-indigo-500 hover:text-indigo-600"
              >
                学生登录
              </Link>

              <p className="w-full text-xs text-slate-500 md:ml-1 md:w-auto">
                无需安装 · 浏览器即可使用 · 电脑 / 手机皆可
              </p>
            </div>
          </div>

          {/* Right mock chat card */}
          <div className="flex-1 w-full max-w-md self-stretch md:self-auto">
            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="mb-3 flex items-center justify-between">
                <div className="text-xs font-semibold text-slate-500">
                  BellaMaths AI 对话预览
                </div>
                <div className="flex gap-1">
                  <span className="h-2 w-2 rounded-full bg-slate-200" />
                  <span className="h-2 w-2 rounded-full bg-slate-200" />
                  <span className="h-2 w-2 rounded-full bg-slate-200" />
                </div>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex justify-end">
                  <div className="max-w-[80%] rounded-2xl rounded-br-sm bg-indigo-600 px-3 py-2 text-xs text-white">
                    帮我解释这题 Form 2 线性方程，我常常算错步骤。
                  </div>
                </div>

                <div className="flex justify-start">
                  <div className="max-w-[85%] rounded-2xl rounded-bl-sm bg-slate-100 px-3 py-2 text-xs text-slate-800">
                    好，我先帮你检查你最常错的地方 😊
                    <br />
                    <br />
                    <span className="font-semibold">常见错误：</span>
                    把常数项和 x 项移错方向。
                    <br />
                    <span className="font-semibold">正确步骤：</span>
                    <br />
                    ① 两边加 5 → 3x = 21
                    <br />
                    ② 两边除 3 → x = 7
                    <br />
                    如果你要，我可以再出一题类似的练习。
                  </div>
                </div>

                <p className="pt-1 text-[11px] text-slate-400">
                  实际效果会根据学生程度动态分析。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================== */}
        {/* 功能特点 */}
        {/* ===================================================== */}
        <section id="features" className="mt-16 space-y-6">
          <h2 className="text-xl font-bold text-slate-900">它能帮你做什么？</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-4 shadow-sm">
              <h3 className="mb-1 text-sm font-semibold text-slate-900">
                智能解题 & 步骤讲解
              </h3>
              <p className="text-xs leading-relaxed text-slate-600">
                输入题目，AI 会按考试评分方式，把每一步写清楚，
                学生可以对照自己的解法找漏洞。
              </p>
            </div>

            <div className="rounded-2xl bg-white p-4 shadow-sm">
              <h3 className="mb-1 text-sm font-semibold text-slate-900">
                对应大马课纲的练习题
              </h3>
              <p className="text-xs leading-relaxed text-slate-600">
                以 KSSM / SPM 课纲为基础，帮你出 Form 1–Form 5
                不同难度的额外练习题。
              </p>
            </div>

            <div className="rounded-2xl bg-white p-4 shadow-sm">
              <h3 className="mb-1 text-sm font-semibold text-slate-900">
                配合你原本的 Bella 课程
              </h3>
              <p className="text-xs leading-relaxed text-slate-600">
                把学生不会的题先丢给 AI，正式上课就能专注在真正突破。
              </p>
            </div>
          </div>
        </section>

        {/* ===================================================== */}
        {/* 适合谁用 */}
        {/* ===================================================== */}
        <section id="who" className="mt-16 space-y-6">
          <h2 className="text-xl font-bold text-slate-900">谁最适合用 BellaMaths AI？</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-4 shadow-sm">
              <h3 className="mb-1 text-sm font-semibold text-slate-900">
                正在上 BellaMaths 课程的学生
              </h3>
              <p className="text-xs leading-relaxed text-slate-600">
                下课后有问题，可以先在 AI 这里问一轮，
                真正解决不了的才带去课堂。
              </p>
            </div>

            <div className="rounded-2xl bg-white p-4 shadow-sm">
              <h3 className="mb-1 text-sm font-semibold text-slate-900">
                数学程度忽高忽低的 Form 1–Form 5 学生
              </h3>
              <p className="text-xs leading-relaxed text-slate-600">
                让 AI 帮他补前面的洞，再跟上学校和补习的进度。
              </p>
            </div>

            <div className="rounded-2xl bg-white p-4 shadow-sm">
              <h3 className="mb-1 text-sm font-semibold text-slate-900">
                想更了解孩子情况的家长
              </h3>
              <p className="text-xs leading-relaxed text-slate-600">
                透过孩子和 AI 的对话，可以看见孩子常问什么题。
              </p>
            </div>

            <div className="rounded-2xl bg-white p-4 shadow-sm">
              <h3 className="mb-1 text-sm font-semibold text-slate-900">
                需要“敢问、不怕错”环境的学生
              </h3>
              <p className="text-xs leading-relaxed text-slate-600">
                有些学生不好意思一直问老师，但敢一直问 AI。
              </p>
            </div>
          </div>
        </section>

        {/* ===================================================== */}
        {/* 如何使用 */}
        {/* ===================================================== */}
        <section id="how" className="mt-16 space-y-6">
          <h2 className="text-xl font-bold text-slate-900">3 步开始使用</h2>
          <ol className="space-y-4 text-sm text-slate-700">
            <li className="flex gap-3">
              <span className="mt-0.5 h-6 w-6 rounded-full bg-indigo-600 text-center text-xs font-bold text-white">
                1
              </span>
              <div>
                <p className="font-semibold">学生登录 / 注册（/login）</p>
                <p className="text-xs text-slate-600">
                  使用 BellaMaths 提供的账号进入系统。
                </p>
              </div>
            </li>

            <li className="flex gap-3">
              <span className="mt-0.5 h-6 w-6 rounded-full bg-indigo-600 text-center text-xs font-bold text-white">
                2
              </span>
              <div>
                <p className="font-semibold">在 /chat 提问或贴上题目</p>
                <p className="text-xs text-slate-600">
                  可以打字、复制试卷题目，或请 AI 出额外练习题。
                </p>
              </div>
            </li>

            <li className="flex gap-3">
              <span className="mt-0.5 h-6 w-6 rounded-full bg-indigo-600 text-center text-xs font-bold text-white">
                3
              </span>
              <div>
                <p className="font-semibold">跟着步骤练习，再带去正式课堂</p>
                <p className="text-xs text-slate-600">
                  学生在家先跟着 AI 练习，上课时老师就能直接做更深入讲解。
                </p>
              </div>
            </li>
          </ol>

          <div className="mt-4 rounded-2xl bg-indigo-50 px-4 py-4 text-sm text-slate-800 md:flex md:items-center md:justify-between">
            <p className="mb-3 text-xs md:mb-0 md:text-sm">
              现在就试看看 BellaMaths AI，看看学生会不会更敢开口问问题。
            </p>
            <Link
              href="/chat"
              className="inline-flex items-center rounded-full bg-indigo-600 px-5 py-2 text-xs font-semibold text-white hover:bg-indigo-700"
            >
              立即体验 AI 助手
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-white">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-4 py-4 text-xs text-slate-500 md:flex-row md:px-6">
          <p>© {new Date().getFullYear()} BellaMaths. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="https://bellamaths.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-slate-700"
            >
              前往 BellaMaths 主站
            </a>
            <span className="text-slate-400">·</span>
            <span>Made for Bella 老师的学生 ❤️</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
