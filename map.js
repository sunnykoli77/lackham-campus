let canvas = document.querySelector("canvas")
let cx = canvas.getContext("2d");

canvas.addEventListener("mousemove", e => {
                    const rect = canvas.getBoundingClientRect();
                    const x = Math.floor(e.clientX - rect.left);
                    const y = Math.floor(e.clientY - rect.top);
                    console.log(`X: ${x}, Y: ${y}`);
                });

function drawRoundedRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
  ctx.fill();
}

function renderOriginalMap() {
    cx.beginPath();
    cx.fillStyle ="LightGreen";
    cx.moveTo(274, 192);
    cx.lineTo(353, 236);
    cx.lineTo(305, 264);
    cx.lineTo(226, 220);
    cx.closePath();
            cx.moveTo(483, 204);
            cx.lineTo(521, 226);
            cx.lineTo(497, 240);
            cx.lineTo(458, 217);
            cx.closePath();
            cx.moveTo(222, 229);
            cx.lineTo(259, 250);
            cx.lineTo(208, 279);
            cx.lineTo(171, 258);
            cx.closePath();
            cx.moveTo(253, 273);
            cx.lineTo(292, 294);
            cx.lineTo(258, 313);
            cx.lineTo(220, 291);
            cx.closePath();
            cx.moveTo(567, 192);
            cx.lineTo(689, 260);
            cx.lineTo(657, 279);
            cx.lineTo(499, 192);
            cx.closePath();
            cx.moveTo(622, 266);
            cx.lineTo(652, 283);
            cx.lineTo(557, 335);
            cx.lineTo(528, 319);
            cx.closePath();
            cx.moveTo(499, 305);
            cx.lineTo(516, 315);
            cx.lineTo(485, 333);
            cx.lineTo(467, 323);
            cx.closePath();
            cx.moveTo(456, 281);
            cx.lineTo(495, 303);
            cx.lineTo(464, 321);
            cx.lineTo(425, 299);
            cx.closePath();
            cx.moveTo(522, 269);
            cx.lineTo(544, 282);
            cx.lineTo(529, 290);
            cx.lineTo(508, 278);
            cx.closePath();
            cx.moveTo(549, 254);
            cx.lineTo(571, 267);
            cx.lineTo(555, 276);
            cx.lineTo(533, 263);
            cx.closePath();
            cx.moveTo(454, 220);
            cx.lineTo(506, 249);
            cx.lineTo(465, 271);
            cx.lineTo(413, 242);
            cx.closePath();
            cx.moveTo(394, 250);
            cx.lineTo(447, 280);
            cx.lineTo(421, 294);
            cx.lineTo(368, 265);
            cx.closePath();
            cx.moveTo(561, 352);
            cx.lineTo(613, 381);
            cx.lineTo(593, 393);
            cx.lineTo(541, 363);
            cx.closePath();
            cx.moveTo(394, 314);
            cx.lineTo(544, 399);
            cx.lineTo(453, 452);
            cx.lineTo(342, 385);
            cx.lineTo(346, 382);
            cx.lineTo(336, 375);
            cx.lineTo(364, 359);
            cx.lineTo(386, 372);
            cx.lineTo(424, 348);
            cx.lineTo(379, 322);
            cx.closePath();
            cx.moveTo(315, 296);
            cx.lineTo(358, 321);
            cx.lineTo(341, 331);
            cx.lineTo(330, 325);
            cx.lineTo(289, 348);
            cx.lineTo(266, 334);
            cx.lineTo(305, 311);
            cx.lineTo(298, 306);
            cx.closePath();
            cx.moveTo(239, 318);
            cx.lineTo(251, 325);
            cx.lineTo(241, 331);
            cx.lineTo(229, 324);
            cx.closePath();
            cx.moveTo(225, 310);
            cx.lineTo(237, 317);
            cx.lineTo(227, 323);
            cx.lineTo(215, 316);
            cx.closePath();
            cx.moveTo(214, 317);
            cx.lineTo(239, 332);
            cx.lineTo(229, 338);
            cx.lineTo(202, 323);
            cx.closePath();
            cx.moveTo(167, 277);
            cx.lineTo(216, 306);
            cx.lineTo(182, 328);
            cx.lineTo(134, 299);
            cx.closePath();
            cx.moveTo(399, 425);
            cx.lineTo(429, 442);
            cx.lineTo(412, 453);
            cx.lineTo(381, 435);
            cx.closePath();
            cx.moveTo(362, 404);
            cx.lineTo(378, 413);
            cx.lineTo(349, 428);
            cx.lineTo (335, 419);
            cx.closePath();
            cx.moveTo(266, 341);
            cx.lineTo(287, 353);
            cx.lineTo(280, 357);
            cx.lineTo(259, 345);
            cx.closePath();
            cx.moveTo(270, 356);
            cx.lineTo(285, 365);
            cx.lineTo(270, 374);
            cx.lineTo(256, 365);
            cx.closePath();
            cx.moveTo(249, 344);
            cx.lineTo(263, 353);
            cx.lineTo(248, 361);
            cx.lineTo(235, 352);
            cx.closePath();
            cx.moveTo(208, 377);
            cx.lineTo(249, 399);
            cx.lineTo(192, 429);
            cx.lineTo(151, 407);
            cx.closePath();
            cx.moveTo(267, 406);
            cx.lineTo(384, 472);
            cx.lineTo(304, 516);
            cx.lineTo(186, 449);
            cx.closePath();
            cx.moveTo(283, 511);
            cx.lineTo(336, 542);
            cx.lineTo(279, 576);
            cx.lineTo(227, 542);
            cx.closePath();
            cx.moveTo(482, 527);
            cx.lineTo(504, 540);
            cx.lineTo(434, 580);
            cx.lineTo(412, 566);
            cx.closePath();
            cx.moveTo(512, 543);
            cx.lineTo(565, 573);
            cx.lineTo(507, 606);
            cx.lineTo(454, 576);
            cx.closePath();
            cx.moveTo(574, 574);
            cx.lineTo(620, 600);
            cx.lineTo(602, 611);
            cx.lineTo(556, 584);
            cx.closePath();
            cx.moveTo(630, 605);
            cx.lineTo(682, 634);
            cx.lineTo(664, 645);
            cx.lineTo(612, 615);
            cx.closePath();
            cx.moveTo(676, 642);
            cx.lineTo(691, 651);
            cx.lineTo(677, 660);
            cx.lineTo(662, 651);
            cx.closePath();
            cx.moveTo(647, 672);
            cx.lineTo(661, 681);
            cx.lineTo(647, 689);
            cx.lineTo(633, 680);
            cx.closePath();
            cx.moveTo(637, 641);
            cx.lineTo(658, 654);
            cx.lineTo(568, 704);
            cx.lineTo(387, 603);
            cx.lineTo(412, 589);
            cx.lineTo(448, 610);
            cx.lineTo(474, 595);
            cx.lineTo(499, 609);
            cx.lineTo(475, 624);
            cx.lineTo(570, 678);
            cx.closePath();
            cx.moveTo(561, 610);
            cx.lineTo(574, 617);
            cx.lineTo(547, 633);
            cx.lineTo(534, 625);
            cx.closePath();
            cx.moveTo(588, 625);
            cx.lineTo(602, 633);
            cx.lineTo(575, 648);
            cx.lineTo(562, 640);
            cx.closePath();
            cx.moveTo(805, 675);
            cx.lineTo(740, 638);
            cx.lineTo(758, 627);
            cx.lineTo(750, 622);
            cx.lineTo(761, 614);
            cx.lineTo(836, 656);
            cx.closePath();
            cx.moveTo(726, 541);
            cx.lineTo(647, 497);
            cx.lineTo(728, 449);
            cx.lineTo(811, 495);
            cx.closePath();
            cx.moveTo(809, 678);
            cx.lineTo(842, 659);
            cx.lineTo(872, 678);
            cx.lineTo(901, 661);
            cx.lineTo(944, 685);
            cx.lineTo(888, 723);
            cx.closePath();
            cx.moveTo(952, 688);
            cx.lineTo(1015, 722);
            cx.lineTo(954, 759);
            cx.lineTo(896, 726);
            cx.closePath();
            cx.moveTo(1258, 622);
            cx.lineTo(1316, 653);
            cx.lineTo(1227, 703);
            cx.lineTo(1171, 671);
            cx.closePath();
            cx.moveTo(1322, 656);
            cx.lineTo(1366, 679);
            cx.lineTo(1303, 722);
            cx.lineTo(1258, 693);
            cx.closePath();
            cx.moveTo(787, 692);
            cx.lineTo(862, 736);
            cx.lineTo(798, 774);
            cx.lineTo(724, 730);
            cx.closePath();
            cx.fill();
            cx.beginPath();
            cx.fillStyle = "grey";
            cx.moveTo(108, 303);
            cx.lineTo(114, 296);
            cx.lineTo(268, 383);
            cx.lineTo(291, 369);
            cx.lineTo(307, 379);
            cx.lineTo(286, 393);
            cx.lineTo(514, 521);
            cx.lineTo(645, 447);
            cx.lineTo(458, 342);
            cx.lineTo(460, 340);
            cx.lineTo(650, 446);
            cx.lineTo(641, 453);
            cx.lineTo(643, 454);
            cx.lineTo(649, 451);
            cx.lineTo(692, 476);
            cx.lineTo(690, 477);
            cx.lineTo(649, 454);
            cx.lineTo(523, 525);
            cx.lineTo(961, 772);
            cx.lineTo(1218, 628);
            cx.lineTo(1224, 633);
            cx.lineTo(1155, 671);
            cx.lineTo(1168, 680);
            cx.lineTo(1160, 684);
            cx.lineTo(1147, 676);
            cx.lineTo(969, 776);
            cx.lineTo(1244, 931);
            cx.lineTo(1224, 931);
            cx.closePath();
            cx.moveTo(291, 353);
            cx.lineTo(304, 361);
            cx.lineTo(295, 367);
            cx.lineTo(282, 359);
            cx.closePath();
            cx.moveTo(322, 370);
            cx.lineTo(335, 379);
            cx.lineTo(326, 384);
            cx.lineTo(313, 376);
            cx.closePath();
            cx.moveTo(348, 492);
            cx.lineTo(371, 505);
            cx.lineTo(415, 481);
            cx.lineTo(417, 483);
            cx.lineTo(371, 509);
            cx.lineTo(345, 493);
            cx.closePath();
            cx.moveTo(317, 509);
            cx.lineTo(341, 523);
            cx.lineTo(324, 534);
            cx.lineTo(321, 532);
            cx.lineTo(334, 524);
            cx.lineTo(314, 511);
            cx.closePath();
            cx.moveTo(247, 556);
            cx.lineTo(237, 562);
            cx.lineTo(328, 622);
            cx.lineTo(420, 572);
            cx.lineTo(418, 571);
            cx.lineTo(329, 620);
            cx.lineTo(240, 562);
            cx.lineTo(249, 557);
            cx.closePath();
            cx.moveTo(492, 532);
            cx.lineTo(498, 528);
            cx.lineTo(501, 530);
            cx.lineTo(495, 534);
            cx.fill();
            cx.beginPath();
            cx.strokeStyle = "purple";
            cx.moveTo(351, 265);
            cx.lineTo(497, 184);
            cx.lineTo(569, 184);
            cx.lineTo(704, 260);
            cx.lineTo(525, 363);
            cx.closePath();
            cx.stroke();
            cx.beginPath();
            cx.strokeStyle = "black";
            cx.moveTo(275, 188);
            cx.lineTo(362, 235);
            cx.lineTo(281, 283);
            cx.lineTo(302, 294);
            cx.lineTo(259, 321);
            cx.lineTo(152, 257);
            cx.closePath();
            cx.stroke();
            cx.beginPath();
            cx.strokeStyle = "blue";
            cx.moveTo(167, 273);
            cx.lineTo(257, 325);
            cx.lineTo(230, 342);
            cx.lineTo(196, 323);
            cx.lineTo(183, 332);
            cx.lineTo(127, 299);
            cx.closePath();
            cx.stroke();
            cx.beginPath();
            cx.strokeStyle = "brown";
            cx.moveTo(360, 279);
            cx.lineTo(452, 331);
            cx.lineTo(328, 407);
            cx.lineTo(234, 353);
            cx.closePath();
            cx.stroke();
            cx.beginPath();
            cx.strokeStyle = "red";
            cx.moveTo(447, 340);
            cx.lineTo(551, 400);
            cx.lineTo(436, 466);
            cx.lineTo(335, 410);
            cx.closePath();
            cx.stroke();
            cx.beginPath();
            cx.strokeStyle = "black";
            cx.moveTo(208, 371);
            cx.lineTo(259, 399);
            cx.lineTo(191, 435);
            cx.lineTo(141, 407);
            cx.closePath();
            cx.stroke();
            cx.beginPath();
            cx.strokeStyle = "olive";
            cx.moveTo(266, 400);
            cx.lineTo(393, 471);
            cx.lineTo(303, 523);
            cx.lineTo(175, 448);
            cx.closePath();
            cx.stroke();
            cx.beginPath();
            cx.strokeStyle = "purple";
            cx.moveTo(487, 519);
            cx.lineTo(723, 653);
            cx.lineTo(575, 745);
            cx.lineTo(335, 604);
            cx.closePath();
            cx.stroke();
            cx.beginPath();
            cx.strokeStyle = "violet";
            cx.moveTo(282, 506);
            cx.lineTo(345, 543);
            cx.lineTo(279, 581);
            cx.lineTo(218, 543);
            cx.closePath();
            cx.stroke();
            cx.beginPath();
            cx.strokeStyle = "blue";
            cx.moveTo(842, 653);
            cx.lineTo(872, 671);
            cx.lineTo(900, 654);
            cx.lineTo(1026, 723);
            cx.lineTo(857, 821);
            cx.lineTo(715, 731);
            cx.closePath();
            cx.stroke();
            cx.beginPath();
            cx.strokeStyle = "orange";
    cx.moveTo(1259, 617);
    cx.lineTo(1376, 679);
    cx.lineTo(1282, 740);
    cx.lineTo(1163, 671);
    cx.closePath();
    cx.stroke();
    cx.font = "bold 14px Bahnschift";
    cx.fillStyle = "black";
    cx.fillText("Canteen", 859, 697);
    cx.fillText("Agritech Centre", 738, 736);
    cx.fillText("Robotic Dairy Unit", 1199, 663);
    cx.fillText("Farm Office", 1269, 697);
    cx.fillText("Lackham House", 908, 731);
    cx.fillText("Library & Inclusion Hub", 741, 636);
    cx.fillText("Residential Warden's office", 455, 583);
    cx.fillText("Sport's field", 668, 498);
    cx.fillText("Green Skills", 146, 302);
    cx.fillText("Innovation Centre", 128, 316);
    cx.fillText("English & Maths", 216, 467);
    cx.fillText("Access to Land Based", 237, 553);
    cx.fillText("Zoological Gardens", 123, 412);
    cx.fillText("Exotics", 227, 297);
    cx.fillText("The Lab", 281, 334);
    cx.fillText("The Walled Garden", 380, 401);
    cx.fillText("The Workshops", 438, 278);
    cx.font = "bold 50px Bahnschrift";
    cx.fillStyle = "darkblue";
    cx.fillText("Lackham", 808, 274);
    cx.font = "bold 35px Bahnschrift"
    cx.fillStyle = "green";
    cx.fillText("Campus", 830, 310);
    cx.fillStyle = "#007BFF";
    drawRoundedRect(cx, 376, 516, 28, 28, 14);
    drawRoundedRect(cx, 699, 683, 28, 28, 14);
    cx.font = "bold 18px Arial";
    cx.fillStyle = "white";
    cx.fillText("P", 707, 703);
    cx.fillText("P", 385, 536);
}

const blocks = [
    {
        startX: 1164,
        endX: 1376,
        startY: 616,
        endY: 740,
        overlayId: "infoOverlay",
        heading: "Zone K: Home test",
        images: ["img/image17.webp"]
    },
    {
        startX: 715,
        endX: 1026,
        startY: 637,
        endY: 821,
        overlayId: "infoOverlay",
        heading: "Zone A: The Hub",
        images: ["img/image1.webp", "img/image2.webp", "img/image3.webp", "img/image19.webp"]
    },
    {
        startX: 386,
        endX: 691,
        startY: 527,
        endY: 704,
        overlayId: "infoOverlay",
        heading: "Zone B: Residential & Student Centre",
        images: ["img/image4.webp", "img/image5.webp", "img/image6.webp"]
    },
    {
        startX: 187,
        endX: 383,
        startY: 407,
        endY: 517,
        overlayId: "infoOverlay",
        heading: "Zone C: English & Maths Centre",
        images: ["img/image7.webp"]
    },
    {
        startX: 228,
        endX: 337,
        startY: 511,
        endY: 575,
        overlayId: "infoOverlay",
        heading: "Zone D: Access to Land Based",
        images: ["img/image8.webp"]
    },
    {
        startX: 360,
        endX: 546,
        startY: 343,
        endY: 449,
        overlayId: "infoOverlay",
        heading: "Zone E: Horticulture & Landscaping",
        images: ["img/image9.webp", "img/image10.webp", "img/image11.webp"]
    },
    {
        startX: 234,
        endX: 356,
        startY: 300,
        endY: 392,
        overlayId: "infoOverlay",
        heading: "Zone F: The Old Stableyard",
        images: ["img/image12.webp", "img/image13.webp"]
    },
    {
        startX: 153,
        endX: 351,
        startY: 204,
        endY: 306,
        overlayId: "infoOverlay",
        heading: "Zone G: Animal Centre",
        images: ["img/image15.webp", "img/image16.webp", "img/image17.webp"]
    },
    {
        startX: 134,
        endX: 181,
        startY: 281,
        endY: 322,
        overlayId: "infoOverlay",
        heading: "Zone H: Sports Centre",
        images: ["img/image18.webp"]
    },
    {
        startX: 371,
        endX: 689,
        startY: 176,
        endY: 345,
        overlayId: "infoOverlay",
        heading: "Zone J: Land Based Engineering",
        images: ["img/image14.webp", "img/image20.webp"]
    },
    // Add more blocks if needed
];

let currentBlockIndex = 0;
let scale = 1;
let translate = { x: 0, y: 0 };

function centerCoordinates(startX, endX, startY, endY, zoomScale) {
    const centerX = (startX + endX) / 2;
    const centerY = (startY + endY) / 2;
    return {
        scale: zoomScale,
        x: -centerX * zoomScale + canvas.width / 2,
        y: -centerY * zoomScale + canvas.height / 2
    };
}

function zoomTo(target, duration = 2000, onComplete) {
    let start = { scale, x: translate.x, y: translate.y };

    new TWEEN.Tween(start)
        .to(target, duration)
        .easing(TWEEN.Easing.Quadratic.InOut)
        .onUpdate(() => {
            scale = start.scale;
            translate.x = start.x;
            translate.y = start.y;
            drawMap();
        })
        .onComplete(() => {
            if (onComplete) onComplete();
        })
        .start();
}
            
function drawMap() {
    cx.setTransform(scale, 0, 0, scale, translate.x, translate.y);
    cx.clearRect(-translate.x / scale, -translate.y / scale, canvas.width / scale, canvas.height / scale);

    renderOriginalMap();
}

        
function animate(time) {
    requestAnimationFrame(animate);
    TWEEN.update(time);
}
            
requestAnimationFrame(animate);

async function populateOverlay(block) {
    const overlay = document.getElementById(block.overlayId);

    // Create and insert heading
    const heading = document.createElement('h2');
    heading.textContent = block.heading;
    overlay.appendChild(heading);

    // Create slider container
    const slider = document.createElement('div');
    slider.className = 'slider';

    // Create and insert images
    block.images.forEach((src, index) => {
        const img = document.createElement('img');
        img.src = src;
        img.loading = 'lazy';
        if (index === 0) {
            requestAnimationFrame(() => {
                img.classList.add('active');
            });
        }
        slider.appendChild(img);
    });

    overlay.appendChild(slider);


    // Start image cycling
    const imgs = slider.querySelectorAll('img');

    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    
    async function animateImages() {
        for (let current = 0; current < imgs.length; current++) {
            if (current != 0) imgs[current].classList.add('active');
            await delay(4000);
            imgs[current].classList.remove('active');
        }
    }

    await animateImages();

    setTimeout(() => {
        overlay.innerHTML = '';
    }, 3000);
}

function cycleZoom() {
    let block = blocks[currentBlockIndex];
    let blockImgs = block.images;
    let zoomInTarget = centerCoordinates(block.startX, block.endX, block.startY, block.endY, 2.5);
    const zoomOutTarget = { scale: 1, x: 0, y: 0 };

    let overlay = document.getElementById(block.overlayId);

    // Step 1: Zoom in
    zoomTo(zoomInTarget, 2000, () => {
        // Step 2: Prepare overlay at bloc
        // k center collapsed state
        overlay.style.display = 'block';
        overlay.style.pointerEvents = 'auto';
        overlay.style.width = '0px';
        overlay.style.height = '0px';
        overlay.style.left = `700px`;
        overlay.style.top = `475px`;

        // Step 3: Animate to full canvas size on next frame
        requestAnimationFrame(() => {
            overlay.style.width = '1280px';
            overlay.style.height = '950px';
            overlay.style.left = '0px';
            overlay.style.top = '0px';
        });

        setTimeout(() => {
            populateOverlay(block);
            
            setTimeout(() => {
                overlay.style.width = '0px';
                overlay.style.height = '0px';
                overlay.style.left = `700px`;
                overlay.style.top = `475px`;

            // After overlay collapse transition (0.8s), hide overlay and zoom out
                setTimeout(() => {
                    overlay.style.display = 'none';
                    overlay.style.pointerEvents = 'none';

                // Zoom out
                    zoomTo(zoomOutTarget, 2000, () => {
                        setTimeout(() => {
                            currentBlockIndex = (currentBlockIndex + 1) % blocks.length;
                            cycleZoom();
                        }, 2000);
                    });
                }, 800);
            }, blockImgs.length * 4000 + 3000);
        }, 800);
    });
}

renderOriginalMap();
            
setTimeout(() => {
    cycleZoom();
}, 5000);
