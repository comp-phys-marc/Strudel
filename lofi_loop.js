$: note(arrange(
  [4, `<c4 e4 g4 b4 c4 e4 g4 b4>*4`],
  [4, stack(`<c3 e3 g3 b3 c3 e3 g3 c4 c3 e3 g3 b3 c3 e3 g3 g4>*8`, 
              `<c3 e3 g3 b3 c3 e3 g3 c4 c3 e3 g3 b3 c3 e3 g3 g4>*8`.add(`5`))]
)).sound("piano").room(0.8).size(3).lpf(800)._scope()
    
$: note(arrange(
  [4, `<b4 c4 e4 f4 a5>*8`],
  [4, `<a2 f3 e3 c3 g4>*8`]
)).sound("square").rarely(ply("2 | 4 | 8")).room(0.2).size(3).lpf(slider(727,0,1000,1)).lpa(.2)._scope()

$: note("<[c3,g3,c4] [g3,b3,d3]>").s("gm_electric_guitar_clean").room(2).lpf(slider(280,0,1000,1))._scope()

$: sound("<bd hh bd rim>*4").rarely(ply("2 | 4")).lpf(slider(659,0,1000,1))._scope()

$: note(arrange(
  [4, "<[c2 e2 g2]*2 [g1 b1 d2]*2>"],
  [4, "<[c2 e2 g2]*2 [g1 b1 d2]*2 [e2 g2 b2]*2 [c3 e3 g3]*2>"]
)).sound("gm_synth_bass_1").lpf(slider(610,0,1000,1))._scope()

$: note("<[g3,b3,e4]!2 [a3,c3,e4] [b3,d3,b4]>").sound("sawtooth").room(1).size(2).lpf(slider(735,0,1000,1))._scope()
