import { GitBranch, Target, Zap, TrendingUp, Brain, Move, Crosshair, Shield, Footprints } from "lucide-react"

const domains = [
  { name: "Serve", icon: Target, skills: 0, color: "text-chart-1" },
  { name: "Return", icon: Shield, skills: 0, color: "text-chart-2" },
  { name: "Third Shot", icon: Crosshair, skills: 0, color: "text-chart-3" },
  { name: "Dinking", icon: Zap, skills: 0, color: "text-chart-4" },
  { name: "Volleying", icon: Move, skills: 0, color: "text-chart-5" },
  { name: "Transition", icon: Footprints, skills: 0, color: "text-chart-1" },
  { name: "Strategy", icon: Brain, skills: 0, color: "text-chart-2" },
  { name: "Movement", icon: TrendingUp, skills: 0, color: "text-chart-3" },
]

export default function SkillGraph() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-[20px] font-bold">Skill Graph</h1>
        <p className="text-[12px] text-muted-foreground">Scaffolded mastery for pickleball — 8 domains, structured progression</p>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        <div className="rounded-xl border bg-card p-4 shadow-sm shadow-black/[0.04]">
          <div className="flex items-center gap-2 text-[12px] text-muted-foreground">
            <GitBranch className="size-3.5" />
            Total Skills
          </div>
          <p className="mt-1 text-[20px] font-bold">0</p>
        </div>
        <div className="rounded-xl border bg-card p-4 shadow-sm shadow-black/[0.04]">
          <div className="flex items-center gap-2 text-[12px] text-muted-foreground">
            <Target className="size-3.5" />
            Domains
          </div>
          <p className="mt-1 text-[20px] font-bold">8</p>
        </div>
        <div className="rounded-xl border bg-card p-4 shadow-sm shadow-black/[0.04]">
          <div className="flex items-center gap-2 text-[12px] text-muted-foreground">
            <Zap className="size-3.5" />
            Sources Ingested
          </div>
          <p className="mt-1 text-[20px] font-bold">0</p>
        </div>
        <div className="rounded-xl border bg-card p-4 shadow-sm shadow-black/[0.04]">
          <div className="flex items-center gap-2 text-[12px] text-muted-foreground">
            <TrendingUp className="size-3.5" />
            Current Level
          </div>
          <p className="mt-1 text-[20px] font-bold">--</p>
        </div>
      </div>

      {/* Skill Domains Grid */}
      <div>
        <h2 className="mb-3 text-[15px] font-semibold">Skill Domains</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {domains.map((domain) => (
            <div key={domain.name} className="rounded-xl border bg-card p-4 shadow-sm shadow-black/[0.04] transition-shadow hover:shadow-md hover:shadow-black/[0.06]">
              <domain.icon className={`size-5 ${domain.color}`} />
              <p className="mt-2 text-[13px] font-medium">{domain.name}</p>
              <p className="text-[11px] text-muted-foreground">{domain.skills} skills mapped</p>
            </div>
          ))}
        </div>
      </div>

      {/* Knowledge Graph Placeholder */}
      <div className="rounded-xl border bg-card shadow-sm shadow-black/[0.04]">
        <div className="border-b px-4 py-3">
          <h2 className="text-[15px] font-semibold">Knowledge Graph</h2>
          <p className="text-[11px] text-muted-foreground">Interactive skill tree visualization</p>
        </div>
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <GitBranch className="size-8 text-muted-foreground/30" />
          <p className="mt-3 text-[13px] font-medium text-muted-foreground">No skills ingested yet</p>
          <p className="mt-1 max-w-xs text-[12px] text-muted-foreground/70">Ingest YouTube transcripts and coaching content to build the skill graph</p>
        </div>
      </div>

      {/* Diagnostic Entry Point */}
      <div className="rounded-xl border bg-card shadow-sm shadow-black/[0.04]">
        <div className="border-b px-4 py-3">
          <h2 className="text-[15px] font-semibold">Quick Diagnostic</h2>
          <p className="text-[11px] text-muted-foreground">&quot;I keep losing to players I should beat&quot;</p>
        </div>
        <div className="divide-y">
          {[
            { q: "At the kitchen line", desc: "Dinking & reset problems" },
            { q: "On my serve or return", desc: "Serve depth & return positioning" },
            { q: "During baseline rallies", desc: "Third shot selection & execution" },
            { q: "After I get to the net", desc: "Volley technique & speed-up defense" },
          ].map((item) => (
            <div key={item.q} className="flex items-center justify-between px-4 py-3 text-[13px] transition-colors hover:bg-accent/50">
              <div>
                <p className="font-medium">{item.q}</p>
                <p className="text-[11px] text-muted-foreground">{item.desc}</p>
              </div>
              <span className="text-[11px] text-muted-foreground">Coming soon</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
