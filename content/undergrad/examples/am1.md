# am1 — Asymptotic Sequences & Series (exemplars)

Source: Cambridge DAMTP "Asymptotic Methods" Example Sheets (D16a Q3–8, D16c Q2),
Michaelmas 2025, H. Latter. Used as a STYLE/DIFFICULTY template only — generate new
questions that are mathematically different (no reused functions or numbers).
Level: Part II (final-year) applied maths. Many are "show that" / proof-flavoured.

## Asymptotic sequences and basic properties

1. Determine whether the sequence of functions \( \phi_n(x) = 1 - \cosh(x^n) \), for
   \( n \in \{1,2,\dots\} \), is an asymptotic sequence as \( x \to 0 \).

2. Suppose \( f(z) \sim \sum_{n=0}^\infty a_n z^{-n} \) and \( g(z) \sim \sum_{n=0}^\infty b_n z^{-n} \)
   as \( z \to \infty \). Show that \( f(z)g(z) \sim \sum_{n=0}^\infty c_n z^{-n} \) with
   \( c_n = \sum_{k=0}^n a_{n-k} b_k \).

3. Suppose \( f(z) \sim a_0 + a_1/z + a_2/z^2 + \cdots \) as \( z \to \infty \), with \( a_0 \neq 0 \).
   Show (by induction or otherwise) that \( 1/f(z) \sim a_0^{-1}\sum_{n=0}^\infty d_n z^{-n} \),
   where \( d_0 = 1 \) and \( \sum_{k=0}^n d_{n-k} a_k = 0 \) for \( n \ge 1 \).

4. (a) Show that if \( f(x) \sim \sum_{n=0}^\infty a_n x^n \) as \( x \to 0^+ \), the \( a_n \) are
   uniquely determined by \( f \).
   (b) For \( e(x) = \exp(-1/x) \), \( x>0 \), show every coefficient in
   \( e(x) \sim \beta_0 + \beta_1 x + \beta_2 x^2 + \cdots \) vanishes; deduce coefficients do
   not determine \( f \) uniquely (a function "beyond all orders").

5. For a positive constant \( \delta \), show that as \( |z| \to \infty \),
   \( \cosh z \sim \tfrac12 e^{z} \) in \( -\pi/2+\delta < \arg z < \pi/2-\delta \) and
   \( \cosh z \sim \tfrac12 e^{-z} \) in \( \pi/2+\delta < \arg z < 3\pi/2-\delta \).
   Discuss the case \( \delta = 0 \), and find expansions of \( \tanh z \) with their Stokes lines.

6. Show that if \( f \) is continuous with \( f(x) = o(\phi(x)) \) as \( x\to\infty \), where \( \phi \)
   is continuous, positive and non-decreasing, then \( \int_a^x f(t)\,dt = o(x\phi(x)) \).

## Asymptotic solution of transcendental equations

7. For the equation \( x + x^{1/2} + 2\ln x = t + \ln t \): show that for all \( t \ge 10 \) there is
   a unique solution \( x(t) \) with \( x(t)\to\infty \); find the first four terms of its asymptotic
   expansion as \( t \to \infty \).
