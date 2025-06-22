samples('shabda/speech:consciousness,quantum')

$: arrange(
  [8, note("c1").s("consciousness").loopAt(choose(0.3, 0.25)).scrub("<0@3 0.48!2 ~>*3")._punchcard({width: 600})],
  [4, note("<c1>*2").s("quantum")],
  [4, "~"],
  [4, note("<g1>*1").s("quantum")],
  [4, "~"],
  [4, note("<c1>*2").s("quantum")],
  [8, note("c1").s("consciousness").loopAt(choose(0.3, 0.25)).scrub("<0@3 0.48!2 ~>*3")._punchcard({width: 600})],
)

$: note(arrange(
  [4, `g5 | e5 | c5 | b5 | g5`],
  [4, `g6 | e6 | c6 | b6 | g6`],
  [4, `<c4 e4 g4 b4>*4`],
  [4, stack(`<c3 e3 g3 b3 c3 e3 g3 c4 c3 e3 g3 b3 c3 e3 g3 g4>*8`, 
              `<c3 e3 g3 b3 c3 e3 g3 c4 c3 e3 g3 b3 c3 e3 g3 g4>*8`.add(`5`))],
  [4, `<c4 e4 g4 b4>*4`],
  [4, stack(`<b4 g4 e4 c4 c4 g4 e4 c5 b4 g4 e4 c4 c4 e4 g4 g5>*8`, 
              `<b4 g4 e4 c4 c4 g4 e4 c5 b4 g4 e4 c4 c4 e4 g4 g5>*8`.add(`5`))],
  [4, stack(`<g5 e5 c5 b5 g5 e5 c5 b5 g5 c5 e5 b5 g4 e4 g4 g5>*8`, 
              `<b4 g4 e4 c4 c4 g4 e4 c5 b4 g4 e4 c4 c4 e4 g4 g5>*8`.add(`5`))],
  [4, `g5 | e5 | c5 | b5 | g5`],
  [4, `g6 | e6 | c6 | b6 | g6`]
)).sound("piano").lpf(2000)._scope()
    
$: note(arrange(
  [8, `<~ ~ ~ ~ ~ ~ ~ c4>*4 | <~ ~ ~ ~ ~ ~ ~ g4>*4`],
  [4, `<b4 c4 e4 f4 a5>*8`],
  [4, `<a2 f3 e3 c3 g4>*8`],
  [4, `<b4 c4 e4 f4 a5>*8`],
  [4, `<a2 f3 e3 g4>*8`],
  [4, `<a2 f3 e3 g4>*8`],
  [8, `~`],
)).sound(choose("square", "sawtooth")).rarely(ply("2 | 4 | 8")).size(3).lpf(slider(1000,0,1000,1)).lpa(.2)._scope()

$: note("<[c3,g3,c4] [g3,b3,d3]>").s("gm_electric_guitar_clean").lpf(slider(1000,0,1000,1))._scope()

$: sound(arrange(
  [8, "<bd hh bd hh>*4"],
  [20, "<bd hh bd rim>*4"],
  [8, "<bd hh bd hh>*4"]
)).rarely(ply("2 | 4")).lpf(slider(1000,0,1000,1))._scope()

$: note(arrange(
  [8, "<[c2 e2 c2 g2]*2 [g1 b1 g1 d2]*2 [e2 g2 e2 b2]*2 [c3 e3 c3 g3]*2>"],
  [4, "<[c2 e2 c2 g2]*2 [g1 b1 g1 d2]*2 [e2 g2 e2 b2]*2 [c3 e3 c3 g3]*2>"],
  [4, "<[c2 g2]*2 [g1 d2]*2>"],
  [4, "<[c2 e2 c2 g2]*2 [g1 b1 g1 d2]*2 [e2 g2 e2 b2]*2 [c3 e3 c3 g3]*2>"],
  [4, "<[c2 g2]*2 [g1 d2]*2>"],
  [4, "<[c2 g2]*2 [g1 d2]*2>"],
  [8, "<[c2 e2 c2 g2]*2 [g1 b1 g1 d2]*2 [e2 g2 e2 b2]*2 [c3 e3 c3 g3]*2>"],
)).sound("gm_synth_bass_1").lpf(slider(1500,0,1500,1))._scope()