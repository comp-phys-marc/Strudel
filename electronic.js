samples('shabda/speech:aaaaaaahhh,aaaaa')

$: note(`
<c2 c3 g3 e4 c1 c2 g2 e3 
c2 c3 g3 c4 c1 c2 g2 e3>*8
`).sound("sawtooth").room(0.1)

$: note(arrange(
  [4, "~"],
  [4, `<g5 ~ e5 ~ c5 ~ g4>*8`]
)).sound("piano").rarely(ply("2 | 4 | 8"))

$: s(arrange(
  [4, "~"],
  [4, `bd bd bd rim`]
)).lpf(800).room(0.2)

$: note(arrange(
  [8, "~"],
  [4, `<c2 c3 g3 e4 c1 c2 g2 e3 c2 c3 g3 c4 c1 c2 g2 e3>*16`.iterBack(4)],
  [8, "~"],
  [4, `<c2 c3 g3 e4 c1 c2 g2 e3 c2 c3 g3 c4 c1 c2 g2 e3>*16`.iterBack(4)]
)).sound("gm_synth_bass_1")

$: n(run(8)).scale("C:pentatonic").s("gm_electric_guitar_muted").release(0.5)
.phaser("<1 2 4 8>")

$: note("<[c3,g3,c4] [g3,b3,d3]>").s("gm_electric_guitar_clean").lpf(slider(2000,0,2000,1))._scope()

$: note(`<g1>`).sound(choose("aaaaaaahhh", "aaaaa")).room(1).scrub("<0@3 0.48!2 ~>*3").lpf(slider(1229,0,2000,1))