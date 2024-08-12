{\rtf1\ansi\ansicpg1252\cocoartf2807
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww17280\viewh13200\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs36 \cf0 const startBtn = document.getElementById('startBtn');\
const widthInput = document.getElementById('width');\
const growthAmountInput = document.getElementById('growthAmount');\
const growRateInput = document.getElementById('growRate');\
const numCirclesInput = document.getElementById('numCircles');\
\
startBtn.addEventListener('click', createCircles);\
\
function createCircles() \{\
    const numCircles = parseInt(numCirclesInput.value);\
    for (let i = 0; i < numCircles; i++) \{\
        createCircle();\
    \}\
\}\
\
function createCircle() \{\
    const circle = document.createElement('div');\
    circle.className = 'circle';\
    circle.style.width = `$\{widthInput.value\}px`;\
    circle.style.height = `$\{widthInput.value\}px`;\
    \
    const maxX = window.innerWidth - parseInt(widthInput.value);\
    const maxY = window.innerHeight - parseInt(widthInput.value);\
    circle.style.left = `$\{Math.random() * maxX\}px`;\
    circle.style.top = `$\{Math.random() * maxY\}px`;\
    \
    document.body.appendChild(circle);\
\
    const growInterval = setInterval(() => \{\
        const currentSize = parseInt(circle.style.width);\
        const newSize = currentSize + parseInt(growthAmountInput.value);\
        circle.style.width = `$\{newSize\}px`;\
        circle.style.height = `$\{newSize\}px`;\
    \}, parseInt(growRateInput.value));\
\
    circle.addEventListener('click', () => \{\
        clearInterval(growInterval);\
        circle.remove();\
    \});\
\}}