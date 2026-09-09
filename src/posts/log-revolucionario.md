---
title: "Los logaritmos son una tecnología revolucionaria"
description: "Los logaritmos son lindos"
image: "/images/blog/napier-logarithms.jpg"
category: "Historia"
lastEdited: "2026-09-08"
---

¿Cómo así los logaritmos fueron inventados?

Imagina que quieres hacer esta operación:

$$
1.32^{12} 
$$

Quizá eres un astrónomo, físico, químico del siglo XVII, y por ahí necesitas ese cálculo y con una buena precisión. Bueno, tomas papel y lapiz y comienzas el trabajo:

$1.32*1.32=$

$1.32*1.32*1.32=$

Quizá te demoras unos $5$ minutos en cada multiplicación, y siendo 11 las que debes hacer, te demorarías casi una hora. El problema es que en tu trabajo debes hacer multiplicaciones, exponenciaciones, raíces, de este estilo todo el tiempo. De hecho estabas ya pensando en contratar a alguien (un calculista) para que tu puedas dedicarte al trabajo de pensar, versus el trabajo de ser una calculadora que está a siglos en el futuro de inventarse. Pero emplear a alguién representa dinero que no tienes. 

Afortunadamente, te llega una carta de un amigo comentándote sobre un nuevo invento: los logaritmos. Te dice que con ciertas tablas previamente calculadas, podrás hacer ese cálculo de 1 hora en tan solo 2 minutos. ¡De horas a minutos!, saltas de la felicidad, ¿cuéntame más!?

Como yo sé que eres lector de la recompensa inmediata, aquí está la forma en que harías ese cálculo con logaritmos con su respectiva lógica


$1.32^12=R$
$\log(1.32^12)=\log(R)$
$12 \log(1.32)=\log(R)$
$12 \log(132/100)=\log(R)$
Simplificamos la fracción 132/100 que equivale a 33/25
$12*log(33)-log(25)=log(R)$

Factoramos $33=11*3$ y $25=5^2$

Por lo tanto

$12*(\log(11*3)-\log(5^2))=\log(R)$

$12*(\log(11) +\log(3) - 2 \log(5))=\log(R)$

$12*(0.400537)=\log(R)$

$4.806=\log(R)$

$2^4.806=R$