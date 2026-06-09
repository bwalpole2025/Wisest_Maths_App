# am5 — The WKB Method / Liouville–Green (exemplars)

Source: Cambridge DAMTP "Asymptotic Methods" Example Sheet 3 (D16c Q3–8),
Michaelmas 2025, H. Latter. STYLE/DIFFICULTY template only — generate new questions that
are mathematically different (no reused potentials or equations).
Level: Part II applied maths. Techniques: Liouville–Green / WKBJ expansion, turning points,
connection formulae, bound-state and eigenvalue estimates, barrier tunnelling.

1. (Liouville–Green) Given \( \varepsilon^2 y'' = q(x)\,y \), seek
   \( y = \exp[\tfrac1\varepsilon S_0 + S_1 + \varepsilon S_2 + \cdots] \). Show
   \( (S_0')^2 = q \), \( 2S_0'S_1' + S_0'' = 0 \), and the iteration
   \( 2S_0'S_n' + S_{n-1}'' + \sum_{j=1}^{n-1}S_j'S_{n-j}' = 0 \). Find \( S_0, S_1, S_2 \) in terms of \( q \).

2. Apply the method to the Airy equation \( y'' = x y \) and deduce
   \( \mathrm{Ai}(x) \sim A\,x^{-1/4}\exp(-\tfrac23 x^{3/2})\big(1 - \tfrac{5}{48}x^{-3/2} + O(x^{-3})\big) \)
   as \( x\to\infty \).

3. Show that for large positive \( x \), \( w'' - x^3 w' + x^{-2} w = 0 \) has two solutions with
   \( w \sim 1 + O(x^{-4}) \) and \( w \sim x^{-3}\exp(x^4/4)\big(1 + O(x^{-4})\big) \).

4. (WKBJ bound states) For \( -\psi'' - \tfrac{s(s+1)}{\cosh^2 x}\psi = E\psi \), \( s>0 \), use WKBJ to find
   approximate bound-state energies \( \sqrt{-E} = \sqrt{s(s+1)} - n - \tfrac12 \); state the allowed
   \( n \) and compare with the exact \( E = -(s-n)^2 \).

5. Show the large eigenvalues of \( w'' = (x^4 + x^2 - \lambda^2)w \), \( w(\pm\infty)=0 \), satisfy
   \( \lambda \sim 2^{1/3}\pi\,[\Gamma(\tfrac14)]^{-4/3}(3n + \tfrac32)^{2/3} + O(n^{1/3}) \).

6. (Tunnelling) For the time-independent Schrödinger equation
   \( -\tfrac{\hbar^2}{2m}\psi'' + V(x)\psi = E\psi \) with a barrier \( E<V \) on \( (a,b) \), use WKBJ
   connection formulae to show the transmission probability
   \( |t|^2 \approx \exp\!\big(-\tfrac{2}{\hbar}\int_a^b \sqrt{2m(V(x)-E)}\,dx\big) \).
