$: note(`<
c e g b
c e g b
c e g b
c e g b
>`)
.fm(4)
.fmdecay("<.01 .05 .1 .2>")
.fmsustain(.4)
._scope()

$: note(`<c e g b c e g c5 
c e g b c e g c5
c e g b c e g c5
c e g b c5 g e5 f5
c e g b c e g c5
c e g b c e g c5
c e g b c e g c5
c e g b f5 g e5 c5
c5 e5 ~ b5 c e g c5
c5 e5 ~ c6 c e g c5
f5 g5 e5 b4 c e g c5
c e g b f5 g e5 c5
c5 e5 ~ b5 c e g c5
c5 e5 ~ c6 c e g c5
f5 g5 e5 b4 c e g c5
c e g b f5 g e5 c5
>*8, - - g4 b5`).sound("piano").room(1).size(4)

$: sound("<bd bd hh bd rim bd hh bd>*8").lpf(500) 

$: note("<[c2 c3]*4 [g1 g2]*4 [e2 e3]*4 [b1 b2]*4>").sound("gm_synth_bass_1").lpf(200) 


$: note("<[g3,b3,e4]!2 [a3,c3,e4] [b3,d3,b4]>")
._scope().lpf(200)
