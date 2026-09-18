---
title: "Los logaritmos son una tecnología revolucionaria"
description: "Los logaritmos son lindos"
image: "/images/blog/napier-logarithms.jpg"
category: "Historia"
lastEdited: "2026-09-08"
---

# ¿Cómo así los logaritmos fueron inventados?

Imagina que quieres hacer esta operación:

$$1.32^{12}$$

Quizá eres un astrónomo, físico o químico del siglo XVII, y por ahí necesitas ese cálculo con una buena precisión. Bueno, tomas papel y lápiz y comienzas el trabajo:

$$1.32 \times 1.32 = 1.7424$$

$$1.7424 \times 1.32 = 2.299968$$

Quizá te demoras unos 5 minutos en cada multiplicación manual larga, y siendo 11 multiplicaciones las que debes efectuar, te demorarías cerca de una hora para obtener un solo resultado. El problema es que en tu trabajo diario debes hacer multiplicaciones, exponenciaciones y raíces de este estilo todo el tiempo. De hecho, estabas pensando en contratar a alguien (un "calculador" humano) para que puedas dedicarte exclusivamente al trabajo teórico, en lugar de ser una calculadora mecánica o electrónica, la cual está a siglos en el futuro de inventarse. Pero emplear a alguien representa dinero que no tienes.

Afortunadamente, te llega una carta de un amigo comentándote sobre un nuevo invento: los logaritmos. Te dice que con ciertas tablas previamente calculadas, podrás transformar complejas multiplicaciones y potencias en simples sumas y multiplicaciones por enteros, haciendo ese cálculo de 1 hora en tan solo 2 minutos. ¡De horas a minutos! Saltas de la felicidad. ¿Cuéntame más?

---

## El método: paso a paso hacia el mundo de los logaritmos

Para resolver $1.32^{12}$, el procedimiento riguroso requiere "trasladar" el problema desde el dominio aritmético usual hacia el mundo de los logaritmos en base 10 (logaritmos decimales o de Briggs), operar allí con simplicidad y luego regresar mediante la antilogaritmación.

### Paso 1: Definición de la ecuación y paso al dominio logarítmico

Asignamos una variable $R$ al resultado desconocido:

$$R = 1.32^{12}$$

Aplicamos la función logaritmo decimal ($\log_{10}$, o simplemente $\log$) a ambos lados de la igualdad:

$$\log(R) = \log(1.32^{12})$$

### Paso 2: Aplicación de propiedades logarítmicas

Por la propiedad de la potencia en los logaritmos, $\log(x^k) = k \cdot \log(x)$, el exponente baja multiplicando:

$$\log(R) = 12 \cdot \log(1.32)$$

### Paso 3: Uso de las tablas de logaritmos (Característica y Mantisa)

Para hallar $\log(1.32)$ mediante las tablas impresas de la época, descomponemos el número en su notación científica o evaluamos su **característica** y su **mantisa**:

* **Característica:** Es la parte entera del logaritmo, determinada por el orden de magnitud. Para $1.32$, como el número está entre $1$ y $10$ ($10^0 \le 1.32 < 10^1$), la característica es $0$.
* **Mantisa:** Es la parte decimal del logaritmo, la cual se busca directamente en las tablas impresas buscando los dígitos $132$.

Al consultar la tabla de logaritmos decimales para la secuencia de dígitos $132$, obtenemos la mantisa aproximadamente igual a $0.1205739$.

Por lo tanto:

$$\log(1.32) = \text{Característica} + \text{Mantisa} = 0 + 0.1205739 = 0.1205739$$

*(Nota: si en su lugar expresáramos $1.32 = \frac{33}{25}$ y usáramos las propiedades del cociente $\log(\frac{A}{B}) = \log A - \log B$, consultaríamos en las tablas los valores $\log(11) \approx 1.0413927$, $\log(3) \approx 0.4771212$ y $\log(5) \approx 0.6989700$, obteniendo exactamente el mismo valor decimal).*

### Paso 4: Operación en el dominio logarítmico

Sustituimos el valor consultado en nuestra ecuación:

$$\log(R) = 12 \cdot (0.1205739)$$

$$\log(R) = 1.4468868$$

### Paso 5: Regreso mediante la función antilogarítmica

Ahora tenemos el logaritmo del resultado: $\log(R) = 1.4468868$. Para despejar $R$, aplicamos la exponenciación en base 10 (la función antilogaritmo):

$$R = 10^{1.4468868}$$

Descomponemos la cifra en parte entera (característica = $1$) y parte decimal (mantisa = $0.4468868$):

$$R = 10^{1 + 0.4468868} = 10^1 \cdot 10^{0.4468868}$$

Buscamos la mantisa $0.4468868$ en la **tabla de antilogaritmos**:

* La entrada $0.4468868$ corresponde a la secuencia de dígitos $27982$ (ya que $10^{0.4468868} \approx 2.7982$).
* La característica igual a $1$ nos indica dónde colocar la coma decimal (multiplicar por $10^1$).

Por ende:

$$R \approx 2.7982 \times 10^1 = 27.982$$

¡Y listo! En lugar de realizar 11 multiplicaciones sucesivas de números decimales a mano, el cálculo se redujo a una búsqueda en tabla y una multiplicación simple por 12.

---

## El origen histórico: ¿Cuándo, dónde y por qué?

Los logaritmos no aparecieron por casualidad; fueron la respuesta directa a la crisis de cálculo que trajo la Revolución Científica.

Fueron inventados formalmente por el terrateniente y matemático escocés **John Napier** (Neper), quien publicó su obra monumental *Mirifici Logarithmorum Canonis Descriptio* en **1614** en Edimburgo, Escocia, tras más de 20 años de trabajo manual continuo calculando tablas. Casi en paralelo y de forma independiente, el matemático suizo **Joost Bürgi** desarrolló un sistema similar entre 1603 y 1611 en Praga.

Poco después, en **1617**, el matemático inglés **Henry Briggs** visitó a Napier y juntos perfeccionaron el sistema, adaptándolo a la base 10, lo que dio origen a los logaritmos decimales y facilitó drásticamente el uso del sistema métrico decimal en los cálculos.

## De la élite matemática a las aulas de todo el mundo

En sus primeros años, los logaritmos y sus tablas eran un secreto técnico guardado y utilizado por una **élite reducida de astrónomos, navegantes de ultramar y cartógrafos reales**. Johannes Kepler, por ejemplo, logró formular sus leyes del movimiento planetario gracias a la velocidad y precisión que le otorgaron las tablas de Napier.

Sin embargo, a medida que la navegación comercial, la arquitectura naval y la ingeniería requirieron precisión masiva, el aprendizaje de logaritmos se democratizó. Para el siglo XIX y durante casi todo el siglo XX, el uso de las tablas de logaritmos y su derivado mecánico —la **regla de cálculo**— se convirtió en un pilar obligatorio en los currículums escolares de educación secundaria e ingeniería en todo el planeta. Toda estructura, puente, barco o avión construido hasta mediados de los años 70 fue diseñado utilizando tablas de logaritmos y reglas de cálculo.

## La compresión del tiempo de cálculo

El impacto en la productividad humana fue brutal. El astrónomo francés Pierre-Simon Laplace lo resumió con una frase célebre:

> *"Los logaritmos, al reducir a unos pocos días el trabajo de varios meses, han duplicado la vida de los astrónomos."*

Un cálculo complejo de física o navegación que antes tomaba **1 hora** a mano pasó a tomar **2 minutos** con tablas de logaritmos.

La siguiente gran revolución ocurrió en la década de **1970**, con el advenimiento de las calculadoras electrónicas de bolsillo (como la icónica HP-35 en 1972). De pronto, presionar la tecla `log` tomaba apenas **0.5 segundos**, enviando las tablas impresas al museo de la historia en cuestión de una década.

Hoy en día, en los procesadores modernos de silicio, los algoritmos de aproximación para funciones trascendentes (como CORDIC) ejecutan un cálculo logarítmico en cuestión de **nanosegundos** ($10^{-9}$ segundos).

## La notación como tecnología

Vistos en retrospectiva, los logaritmos son equivalentes a un salto tecnológico de primer orden, pero sin engranajes ni electricidad.

Consistieron fundamentalmente en un cambio de perspectiva algebraico: **una notación distinta** capaz de transformar la multiplicación en suma y la exponenciación en multiplicación. Una idea conceptual simple que reorganizó la información para adaptarla a la capacidad cognitiva del cerebro humano, convirtiéndose en un motor fundamental no solo para el desarrollo de la matemática pura, sino para la construcción del mundo moderno.