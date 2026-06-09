# am3 — Stationary Phase & Steepest Descent (exemplars)

Source: Cambridge DAMTP "Asymptotic Methods" Example Sheets (D16b Q3–10, D16c Q1, Q9–10),
Michaelmas 2025, H. Latter. STYLE/DIFFICULTY template only — generate new questions that
are mathematically different (no reused phases or contours).
Level: Part II applied maths. Techniques: stationary phase, method of steepest descent,
saddle points, Stokes phenomenon.

1. For \( a<c<b \), \( f \) smooth on \( (a,c)\cup(c,b) \) with a jump at \( c \), find the
   asymptotic expansion of \( I(\omega) = \int_a^b f(t)e^{i\omega t}\,dt \) as \( |\omega|\to\infty \).
   Then specialise to \( f(t) = -e^t\ (t<0),\ e^{-t}\ (t\ge 0) \) over \( (-\infty,\infty) \) and
   compare with the exact transform.

2. (Stationary phase) Show that as \( x\to+\infty \),
   \( \int_0^\pi \exp[i x (t - \sin t)]\,dt \sim e^{i\pi/6}\,(6/x)^{1/3}\,\Gamma(\tfrac43) \).
   How does the result change if the lower limit is \( -\pi \)?

3. As \( x\to\infty \), find the leading term of
   (a) \( \int_0^1 \cos(x t^p)\,dt \), \( p>1 \);
   (b) \( \int_0^{\pi/2}\big(1-\tfrac{2\theta}{\pi}\big)^\gamma \cos(x\cos\theta)\,d\theta \)
   for \( \gamma = 0, -\tfrac12, -\tfrac34 \).

4. (Steepest descent) For \( f(\theta) = \tfrac{1}{2\pi i}\int_C \exp[\theta(t+\tfrac13 t^3)]\,dt \)
   with \( C \) from \( \infty \) in \( -\pi/2<\arg t<-\pi/6 \) to \( \infty \) in \( \pi/6<\arg t<\pi/2 \),
   find the saddle points and steepest-descent paths, and show
   \( f(\theta) = (\pi\theta)^{-1/2}\cos(\tfrac23\theta - \tfrac\pi4) + O(\theta^{-1}) \) as \( \theta\to\infty \).

5. Use steepest descent for the first two non-zero terms of
   \( \int_0^\infty \exp[i x(\tfrac13 t^3 + t)]\,dt \sim i(\tfrac1x + \tfrac{2}{x^3} + \cdots) \) as \( x\to+\infty \);
   check by integration by parts.

6. (Stokes phenomenon) For \( f(z) = \int_{i\infty}^z \exp(s^2)\,ds \), use integration by parts to
   obtain \( f(z) \sim \exp(z^2)(\tfrac{1}{2z} + \tfrac{1}{4z^3} + \tfrac{3}{8z^5} + \cdots) \) in
   \( 0 \le \arg z \le \pi \); find the Stokes lines.
