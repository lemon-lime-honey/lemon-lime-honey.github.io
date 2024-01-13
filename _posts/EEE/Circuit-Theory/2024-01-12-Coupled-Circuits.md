---
layout: post
title:  상호유도 결합회로
author: bs
date: '2024-01-12 18:45:00 +0900'
category: [EEE, Circuit Theory]
tags: [회로이론]
math: true
---

# 상호 인덕턴스와 결합계수
1. $M=k\sqrt{L_{1}L_{2}}$
2. 결합계수 $k=\dfrac{M}{\sqrt{L_{1}L_{2}}}$
    1. $k=1$: 완전결합(이상결합)
    2. $k=0$: 미결합

# 인덕턴스 접속

| 구분 | 직렬접속 | 병렬접속 |
| --- | --- | --- |
| 가동접속 | $L_{0}=L_{1}+L_{2}+2M$ | $L_{0}=\dfrac{L_{1}L_{2}-M^{2}}{L_{1}+L_{2}-2M}$ |
| 차동접속 | $L_{0}=L_{1}+L_{2}-2M$ | $L_{0}=\dfrac{L_{1}L_{2}-M^{2}}{L_{1}+L_{2}+2M}$ |

# 이상적인 변압기
권수비 $a=\dfrac{N_{1}}{N_{2}}=\dfrac{E_{1}}{E_{2}}=\dfrac{I_{2}}{I_{1}}=\sqrt{\dfrac{Z_{1}}{Z_{2}}}$