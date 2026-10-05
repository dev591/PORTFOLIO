import type { SceneId } from "@/data/portfolio";
import { Sprite } from "./Sprite";
import { heart, palette, robot } from "./sprites";

type RectProps = { x: number; y: number; w: number; h: number; c: string; className?: string };
const R = ({ x, y, w, h, c, className }: RectProps) => (
  <rect x={x} y={y} width={w} height={h} fill={c} className={className} />
);

const PX_FONT = "var(--font-silkscreen), monospace";
const T = ({ x, y, s = 4, c = "#fff", children }: { x: number; y: number; s?: number; c?: string; children: string }) => (
  <text x={x} y={y} fontSize={s} fill={c} fontFamily={PX_FONT} style={{ fontSmooth: "never" }}>
    {children}
  </text>
);

const STARS = [
  [12, 12], [20, 20], [30, 11], [44, 16], [50, 26], [16, 30], [38, 24],
];

function Svg({ w, h, label, cover, children }: { w: number; h: number; label: string; cover?: boolean; children: React.ReactNode }) {
  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      role="img"
      aria-label={label}
      shapeRendering="crispEdges"
      preserveAspectRatio={cover ? "xMidYMid slice" : undefined}
      className="block h-full w-full"
    >
      {children}
    </svg>
  );
}

/** Hero: a night-time desk where an agent graph runs on the monitor. */
export function DeskScene() {
  return (
    <Svg w={160} h={120} label="Pixel art of a desk at night with a monitor running an AI agent graph and a robot sidekick">
      {/* wall */}
      <R x={0} y={0} w={160} h={120} c="#2a1b4a" />
      <R x={0} y={0} w={160} h={4} c="#231640" />
      {/* window + city */}
      <R x={6} y={6} w={52} h={42} c="#141414" />
      <R x={8} y={8} w={48} h={38} c="#1e1b4b" />
      {STARS.map(([x, y]) => (
        <R key={`${x}-${y}`} x={x} y={y} w={1} h={1} c="#fde68a" />
      ))}
      <R x={44} y={10} w={5} h={5} c="#fef3c7" />
      <R x={45} y={9} w={3} h={1} c="#fef3c7" />
      <R x={8} y={32} w={8} h={14} c="#312e81" />
      <R x={17} y={26} w={10} h={20} c="#3730a3" />
      <R x={28} y={34} w={7} h={12} c="#312e81" />
      <R x={36} y={28} w={9} h={18} c="#3730a3" />
      <R x={46} y={36} w={10} h={10} c="#312e81" />
      {[[19, 29], [23, 33], [19, 37], [38, 31], [41, 35], [38, 39], [10, 36], [48, 39]].map(([x, y]) => (
        <R key={`w${x}-${y}`} x={x} y={y} w={2} h={2} c="#fbbf24" />
      ))}
      <R x={31} y={8} w={2} h={38} c="#141414" />
      <R x={8} y={26} w={48} h={2} c="#141414" />
      {/* neon sign */}
      <R x={64} y={8} w={40} h={16} c="#141414" />
      <R x={65} y={9} w={38} h={14} c="#1a0f2e" />
      <T x={68} y={19} s={8} c="#f472b6">
        AI
      </T>
      <T x={83} y={19} s={8} c="#22d3ee">
        LAB
      </T>
      {/* shelf */}
      <R x={112} y={30} w={44} h={3} c="#7c4a2d" />
      <R x={114} y={16} w={4} h={14} c="#ef4444" />
      <R x={118} y={18} w={4} h={12} c="#3b82f6" />
      <R x={122} y={15} w={3} h={15} c="#22c55e" />
      <R x={125} y={19} w={5} h={11} c="#ffc727" />
      <R x={132} y={20} w={10} h={10} c="#141414" />
      <R x={133} y={21} w={8} h={6} c="#22d3ee" />
      <R x={135} y={23} w={4} h={2} c="#0e7490" />
      <R x={145} y={22} w={8} h={8} c="#8b5cf6" />
      <R x={147} y={20} w={4} h={2} c="#8b5cf6" />
      {/* poster */}
      <R x={120} y={40} w={28} h={30} c="#141414" />
      <R x={121} y={41} w={26} h={28} c="#ffc727" />
      <T x={123} y={49} s={5} c="#141414">
        SHIP
      </T>
      <T x={123} y={56} s={5} c="#141414">
        IT
      </T>
      <Sprite map={heart} palette={palette} x={138} y={60} />
      {/* desk */}
      <R x={0} y={92} w={160} h={28} c="#7c4a2d" />
      <R x={0} y={92} w={160} h={3} c="#a0623a" />
      <R x={0} y={95} w={160} h={1} c="#5b3520" />
      {/* monitor */}
      <R x={42} y={30} w={74} h={52} c="#141414" />
      <R x={45} y={33} w={68} h={44} c="#0b1020" />
      <R x={74} y={82} w={10} h={6} c="#141414" />
      <R x={64} y={88} w={30} h={4} c="#141414" />
      <R x={45} y={33} w={68} h={6} c="#1f2937" />
      <R x={47} y={35} w={2} h={2} c="#ef4444" />
      <R x={50} y={35} w={2} h={2} c="#ffc727" />
      <R x={53} y={35} w={2} h={2} c="#22c55e" />
      <T x={58} y={37.5} s={3} c="#9ca3af">
        agent_graph.py
      </T>
      {/* graph edges */}
      <R x={60} y={47} w={14} h={1} c="#22c55e" />
      <R x={86} y={47} w={4} h={1} c="#22c55e" />
      <R x={90} y={47} w={1} h={10} c="#22c55e" />
      <R x={80} y={50} w={1} h={7} c="#22c55e" />
      <R x={90} y={63} w={1} h={4} c="#22c55e" />
      <R x={80} y={63} w={1} h={4} c="#22c55e" />
      <R x={80} y={67} w={11} h={1} c="#22c55e" />
      {/* graph nodes */}
      <R x={48} y={44} w={12} h={7} c="#ffc727" />
      <T x={49} y={49} s={3} c="#141414">
        USER
      </T>
      <R x={74} y={44} w={12} h={7} c="#8b5cf6" />
      <T x={75} y={49} s={3}>
        PLAN
      </T>
      <R x={74} y={57} w={12} h={6} c="#3b82f6" />
      <T x={76} y={61.5} s={3}>
        RAG
      </T>
      <R x={88} y={57} w={14} h={6} c="#ef4444" />
      <T x={89} y={61.5} s={3}>
        TOOLS
      </T>
      <R x={92} y={66} w={13} h={6} c="#22c55e" className="cursor-blink" />
      <T x={93} y={70.5} s={3} c="#141414">
        EVAL
      </T>
      <T x={48} y={75} s={3} c="#22c55e">
        &gt; agent.run()
      </T>
      <R x={70} y={72} w={2} h={4} c="#22c55e" className="cursor-blink" />
      {/* keyboard */}
      <R x={52} y={98} w={56} h={10} c="#141414" />
      <R x={54} y={100} w={52} h={2} c="#ef4444" />
      <R x={54} y={102} w={52} h={2} c="#22c55e" />
      <R x={54} y={104} w={52} h={2} c="#3b82f6" />
      <R x={64} y={104} w={30} h={2} c="#e5e7eb" />
      {/* mug */}
      <R x={20} y={82} w={12} h={12} c="#141414" />
      <R x={21} y={83} w={10} h={10} c="#f4f1e8" />
      <R x={21} y={83} w={10} h={2} c="#7c4a2d" />
      <R x={32} y={85} w={3} h={6} c="#141414" />
      <R x={32} y={86} w={2} h={4} c="#2a1b4a" />
      <T x={22} y={91} s={3} c="#141414">
        LLM
      </T>
      <g className="bob">
        <R x={23} y={74} w={1} h={3} c="#e5e7eb" />
        <R x={26} y={72} w={1} h={4} c="#e5e7eb" />
        <R x={29} y={75} w={1} h={3} c="#e5e7eb" />
      </g>
      {/* robot sidekick */}
      <g className="bob">
        <g transform="translate(118 66) scale(1.5)">
          <Sprite map={robot} palette={palette} title="Robot agent" />
        </g>
      </g>
      {/* plant */}
      <R x={8} y={84} w={8} h={8} c="#c2410c" />
      <R x={7} y={82} w={10} h={2} c="#9a3412" />
      <R x={11} y={74} w={2} h={8} c="#16a34a" />
      <R x={8} y={76} w={3} h={2} c="#22c55e" />
      <R x={13} y={73} w={3} h={2} c="#22c55e" />
      <R x={6} y={79} w={4} h={2} c="#16a34a" />
    </Svg>
  );
}

const TELEMETRY = [10, 11, 11, 12, 11, 10, 10, 11, 12, 13, 12, 11, 11, 10, 11, 12, 12, 11, 10, 11, 12, 11, 11, 12];

function Drone() {
  return (
    <>
      <R x={0} y={0} w={160} h={90} c="#0c4a6e" />
      {[[8, 8], [128, 12], [104, 4], [20, 40], [140, 44]].map(([x, y]) => (
        <R key={`${x}-${y}`} x={x} y={y} w={14} h={3} c="#bae6fd" />
      ))}
      {/* UAV, top-down: long straight wings, V-tail, rear pusher prop */}
      <g className="bob">
        {/* shadow */}
        <R x={50} y={52} w={70} h={2} c="#083344" />
        {/* wings */}
        <R x={76} y={4} w={10} h={48} c="#141414" />
        <R x={77} y={5} w={8} h={46} c="#e5e7eb" />
        <R x={77} y={5} w={8} h={2} c="#ef4444" />
        <R x={77} y={49} w={8} h={2} c="#22c55e" />
        {/* fuselage */}
        <R x={44} y={24} w={76} h={8} c="#141414" />
        <R x={45} y={25} w={74} h={6} c="#d1d5db" />
        <R x={118} y={25} w={6} h={6} c="#141414" />
        <R x={119} y={26} w={4} h={4} c="#9ca3af" />
        <R x={104} y={26} w={10} h={4} c="#22d3ee" />
        {/* V-tail */}
        <R x={48} y={14} w={6} h={28} c="#141414" />
        <R x={49} y={15} w={4} h={26} c="#e5e7eb" />
        {/* pusher prop */}
        <R x={40} y={20} w={3} h={16} c="#141414" className="cursor-blink" />
        <R x={41} y={26} w={4} h={4} c="#ffc727" />
        {/* engine */}
        <R x={58} y={26} w={10} h={4} c="#ef4444" />
      </g>
      {/* HUD */}
      <R x={8} y={56} w={144} h={30} c="#141414" />
      <R x={9} y={57} w={142} h={28} c="#020617" />
      <T x={12} y={63} s={4} c="#22d3ee">
        ENGINE TWIN
      </T>
      <T x={110} y={63} s={4} c="#22c55e">
        HEALTH OK
      </T>
      <R x={12} y={74} w={136} h={1} c="#1e293b" />
      {TELEMETRY.map((v, i) => {
        const prev = TELEMETRY[i - 1] ?? v;
        const top = Math.min(v, prev);
        return (
          <g key={i}>
            <R x={12 + i * 5.6} y={84 - v} w={6} h={1} c="#ffc727" />
            {prev !== v && <R x={12 + i * 5.6} y={84 - Math.max(v, prev)} w={1} h={Math.abs(v - prev) + 1} c="#ffc727" />}
            {top > 12 && <R x={12 + i * 5.6} y={84 - v - 1} w={6} h={1} c="#f472b6" />}
          </g>
        );
      })}
    </>
  );
}

function Handshake() {
  return (
    <>
      <R x={0} y={0} w={160} h={90} c="#1e1b4b" />
      <R x={0} y={62} w={160} h={28} c="#312e81" />
      <Sprite map={robot} palette={palette} x={22} y={38} />
      <Sprite map={robot} palette={{ ...palette, y: "#22c55e", b: "#141414" }} x={122} y={38} />
      {/* bubbles */}
      <R x={8} y={10} w={46} h={20} c="#141414" />
      <R x={9} y={11} w={44} h={18} c="#ffffff" />
      <R x={26} y={30} w={4} h={4} c="#141414" />
      <T x={12} y={19} s={4} c="#141414">
        BUYER
      </T>
      <T x={12} y={26} s={5} c="#ef4444">
        ₹399?
      </T>
      <R x={106} y={10} w={46} h={20} c="#141414" />
      <R x={107} y={11} w={44} h={18} c="#ffffff" />
      <R x={128} y={30} w={4} h={4} c="#141414" />
      <T x={110} y={19} s={4} c="#141414">
        SELLER
      </T>
      <T x={110} y={26} s={5} c="#16a34a">
        ₹420!
      </T>
      {/* hash chain */}
      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          <R x={44 + i * 20} y={64} w={14} h={12} c="#141414" />
          <R x={45 + i * 20} y={65} w={12} h={10} c={i === 3 ? "#ffc727" : "#8b5cf6"} />
          <T x={46 + i * 20} y={72} s={3.5} c={i === 3 ? "#141414" : "#fff"}>
            {["#a1", "#f3", "#9c", "PAY"][i]}
          </T>
          {i < 3 && <R x={58 + i * 20} y={69} w={6} h={2} c="#e5e7eb" />}
        </g>
      ))}
      {/* lock */}
      <R x={72} y={36} w={16} h={12} c="#141414" />
      <R x={73} y={37} w={14} h={10} c="#ffc727" />
      <R x={75} y={30} w={2} h={6} c="#141414" />
      <R x={83} y={30} w={2} h={6} c="#141414" />
      <R x={75} y={28} w={10} h={2} c="#141414" />
      <R x={79} y={40} w={2} h={4} c="#141414" />
    </>
  );
}

function Hospital() {
  return (
    <>
      <R x={0} y={0} w={160} h={90} c="#ccfbf1" />
      <R x={0} y={70} w={160} h={20} c="#5eead4" />
      {/* building */}
      <R x={14} y={20} w={56} h={52} c="#141414" />
      <R x={16} y={22} w={52} h={50} c="#ffffff" />
      <R x={36} y={26} w={12} h={12} c="#ef4444" />
      <R x={40} y={24} w={4} h={16} c="#ef4444" />
      <R x={34} y={30} w={16} h={4} c="#ef4444" />
      {[[20, 44], [32, 44], [46, 44], [58, 44], [20, 56], [58, 56]].map(([x, y]) => (
        <R key={`${x}-${y}`} x={x} y={y} w={6} h={6} c="#7dd3fc" />
      ))}
      <R x={36} y={56} w={12} h={16} c="#0f766e" />
      {/* chat panel */}
      <R x={84} y={12} w={68} h={58} c="#141414" />
      <R x={86} y={14} w={64} h={54} c="#f8fafc" />
      <R x={86} y={14} w={64} h={7} c="#0f766e" />
      <T x={89} y={19.5} s={4}>
        VELA
      </T>
      <R x={90} y={25} w={40} h={9} c="#e2e8f0" />
      <T x={92} y={31} s={3.5} c="#141414">
        OPD timings?
      </T>
      <R x={100} y={38} w={46} h={16} c="#14b8a6" />
      <T x={102} y={44} s={3.5} c="#fff">
        9AM - 5PM
      </T>
      <T x={102} y={50} s={3} c="#ccfbf1">
        src: policy.pdf p2
      </T>
      <R x={90} y={58} w={56} h={6} c="#e2e8f0" />
      <R x={92} y={60} w={2} h={2} c="#0f766e" className="cursor-blink" />
    </>
  );
}

function Paper() {
  const lines = [22, 30, 38, 46, 54];
  return (
    <>
      <R x={0} y={0} w={160} h={90} c="#2b1d3a" />
      <R x={0} y={74} w={160} h={16} c="#1f1530" />
      {/* research paper */}
      <R x={14} y={8} w={58} h={74} c="#141414" />
      <R x={16} y={10} w={54} h={70} c="#f8fafc" />
      <T x={19} y={17} s={3.5} c="#141414">
        ARXIV.PDF
      </T>
      {lines.map((y, i) => (
        <g key={y}>
          <R x={19} y={y} w={i % 2 ? 40 : 46} h={2} c="#94a3b8" />
          <R x={19} y={y + 4} w={i % 2 ? 44 : 34} h={2} c="#94a3b8" />
        </g>
      ))}
      {/* red reviewer marks */}
      <R x={18} y={29} w={30} h={1} c="#ef4444" />
      <R x={18} y={45} w={24} h={1} c="#ef4444" />
      <R x={60} y={36} w={8} h={8} c="#ef4444" />
      <T x={62} y={42.5} s={6} c="#fff">
        ?
      </T>
      <T x={19} y={70} s={3} c="#ef4444">
        CLAIM UNVERIFIED
      </T>
      {/* magnifier */}
      <R x={44} y={46} w={22} h={22} c="#141414" />
      <R x={46} y={48} w={18} h={18} c="#bae6fd" />
      <R x={48} y={50} w={5} h={3} c="#ffffff" />
      <R x={64} y={66} w={5} h={5} c="#141414" />
      <R x={68} y={70} w={5} h={5} c="#141414" />
      {/* verdict terminal */}
      <R x={84} y={10} w={68} h={60} c="#141414" />
      <R x={86} y={12} w={64} h={56} c="#020617" />
      <R x={86} y={12} w={64} h={6} c="#1f2937" />
      <T x={89} y={16.5} s={3} c="#9ca3af">
        skeptic.run()
      </T>
      <T x={89} y={26} s={3.5} c="#22c55e">
        [1] CLAIM .... OK
      </T>
      <T x={89} y={34} s={3.5} c="#ffc727">
        [2] METHOD ... ?
      </T>
      <T x={89} y={42} s={3.5} c="#ef4444">
        [3] FLAWS .... 3
      </T>
      <R x={89} y={48} w={58} h={14} c="#ef4444" />
      <T x={92} y={57} s={4.5} c="#fff">
        VERDICT: WEAK
      </T>
      <R x={89} y={64} w={2} h={3} c="#22c55e" className="cursor-blink" />
      {/* local badge */}
      <R x={98} y={76} w={44} h={10} c="#141414" />
      <R x={99} y={77} w={42} h={8} c="#ffc727" />
      <T x={101} y={83} s={4} c="#141414">
        100% LOCAL
      </T>
    </>
  );
}

const SCENES: Record<SceneId, { el: () => React.ReactNode; label: string }> = {
  drone: { el: Drone, label: "Pixel art of a UAV with an engine-health telemetry display" },
  handshake: { el: Handshake, label: "Pixel art of buyer and seller AI agents negotiating over a hash chain" },
  hospital: { el: Hospital, label: "Pixel art of a hospital and a chat assistant citing its source" },
  paper: { el: Paper, label: "Pixel art of a research paper under a magnifier with a skeptical review verdict" },
};

export function ProjectScene({ id }: { id: SceneId }) {
  const { el: El, label } = SCENES[id];
  return (
    <Svg w={160} h={90} label={label} cover>
      <El />
    </Svg>
  );
}
