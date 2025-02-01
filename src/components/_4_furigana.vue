<script setup lang="ts">
import GridPoint from "./GridPoint.vue";
function generateCrossGrid(x: number, y: number, crossSize = 3, spacing = 8) {
    let gridAreas = [];
    let halfSize = Math.floor(crossSize / 2); // Half size for centering

    for (let row = 1 + halfSize; row <= y * spacing; row += spacing) {
        for (let col = 1 + halfSize; col <= x * spacing; col += spacing) {
            // Vertical part of the cross (centered)
            gridAreas.push(`${row - halfSize}/${col}/span ${crossSize}`);
            // Horizontal part of the cross (centered)
            gridAreas.push(`${row}/${col - halfSize}/auto/span ${crossSize}`);
        }
    }

    return gridAreas;
}

function generateDotGrid(x: number, y: number, spacing = 8, shiftX = 0, shiftY = 0) {
    let gridAreas = [];

    for (let row = 1 + shiftY; row <= y * spacing + shiftY; row += spacing) {
        for (let col = 1 + shiftX; col <= x * spacing + shiftX; col += spacing) {
            gridAreas.push(`${row}/${col}/span 1`);
        }
    }

    return gridAreas;
}
</script>
<template>
  <section data-auto-animate data-transition="fade-in">
    <section>
      <h1>But there's a problem</h1>
    </section>
    <section data-auto-animate>
      <div class="flex">
        <div class="grid-35" style="margin-left: auto; margin-right: auto">
          <h1
            data-id="japanese"
            style="
              grid-area: 15/3 / span 7 / span 30;
              z-index: 100;
              color: black;
              font-size: 4rem;
            "
          >
            日本語
          </h1>
          <h1
            style="
              grid-area: 19/3 / span 7 / span 30;
              z-index: 100;
              color: black;
              line-height: 10rem;
            "
          >
            Japanese
          </h1>
        </div>
      </div>
    </section>
    <aside class="notes">
      The distance is a standard writing size In Japanese, above some characters
      you have this thing called furigana, which is written in a smaller font. I
      had to find a way to write those characters at a standard size. I don't
      want to make the
    </aside>
  </section>
  <section data-auto-animate>
    <div class="flex">
      <div class="grid-35" style="margin-left: auto; margin-right: auto">
        <h1
          data-id="furigana"
          style="
            grid-area: 15/3 / span 7 / span 30;
            z-index: 100;
            color: black;
            font-size: 4rem;
          "
        >
          にほんご
        </h1>
        <h1
          data-id="japanese"
          style="
            grid-area: 19/3 / span 7 / span 30;
            z-index: 100;
            color: black;
            line-height: 10rem;
          "
        >
          日本語
        </h1>
      </div>
    </div>
  </section>
  <section data-auto-animate>
    <div class="flex">
      <div class="grid-35" style="margin-left: auto; margin-right: auto">
        <h1
          data-id="furigana"
          style="
            grid-area: 15/3 / span 7 / span 30;
            z-index: 100;
            color: black;
            font-size: 4rem;
          "
        >
          にほんご
        </h1>
        <h1
          data-id="japanese"
          style="
            grid-area: 19/3 / span 7 / span 30;
            z-index: 100;
            color: black;
            line-height: 10rem;
          "
        >
          日本語
        </h1>
        <GridPoint
          v-for="(pos, idx) in generateCrossGrid(5, 5)"
          :key="idx"
          :dataId="idx"
          :gridArea="pos"
          bg-color="rgb(200, 200, 200)"
        >
        </GridPoint>
        <GridPoint
          v-for="(pos, idx) in generateDotGrid(5, 4, 8, 1, 5)"
          :key="idx"
          :dataId="idx + 100"
          :gridArea="pos"
          bg-color="rgb(200, 200, 200)"
        >
        </GridPoint>
        <GridPoint
          v-for="(pos, idx) in generateDotGrid(4, 5, 8, 5, 1)"
          :key="idx"
          :dataId="idx + 200"
          :gridArea="pos"
          bg-color="rgb(200, 200, 200)"
        >
        </GridPoint>
      </div>
    </div>
  </section>
</template>
