<script setup lang="ts">
import GridPoint from "./GridPoint.vue";
import page from '../assets/page.jpg'
function generateCrossGrid(
  x: number,
  y: number,
  crossSize = 3,
  spacing = 8,
  shiftX = 0,
  shiftY = 0
) {
  let gridAreas = [];
  let halfSize = Math.floor(crossSize / 2); // Ensures centering

  for (let row = 1 + shiftY; row <= y * spacing + shiftY; row += spacing) {
    for (let col = 1 + shiftX; col <= x * spacing + shiftX; col += spacing) {
      // Vertical part of the cross (centered)
      gridAreas.push(`${row}/${col + halfSize}/span ${crossSize}`);
      // Horizontal part of the cross (centered)
      gridAreas.push(`${row + halfSize}/${col}/auto/span ${crossSize}`);
    }
  }

  return gridAreas;
}

// function generateDotGrid(
//   x: number,
//   y: number,
//   spacing = 8,
//   shiftX = 0,
//   shiftY = 0
// ) {
//   let gridAreas = [];

//   for (let row = 1 + shiftY; row <= y * spacing + shiftY; row += spacing) {
//     for (let col = 1 + shiftX; col <= x * spacing + shiftX; col += spacing) {
//       gridAreas.push(`${row}/${col}/span 1`);
//     }
//   }

//   return gridAreas;
// }

// function generateSquareDotGrid(
//   x: number,
//   y: number,
//   spacing = 8,
//   dotOffset = 2,
//   shiftX = 0,
//   shiftY = 0
// ) {
//   let gridAreas = [];

//   for (let row = 1 + shiftY; row <= y * spacing + shiftY; row += spacing) {
//     for (let col = 1 + shiftX; col <= x * spacing + shiftX; col += spacing) {
//       // Place four dots in a square formation around the center point
//       gridAreas.push(`${row}/${col}/span 1`); // Top-left dot
//       gridAreas.push(`${row}/${col + dotOffset}/span 1`); // Top-right dot
//       gridAreas.push(`${row + dotOffset}/${col}/span 1`); // Bottom-left dot
//       gridAreas.push(`${row + dotOffset}/${col + dotOffset}/span 1`); // Bottom-right dot
//     }
//   }

//   return gridAreas;
// }
</script>
<template>
  <section data-auto-animate>
    <div class="flex">
      <div class="grid-11">
        <GridPoint
          v-for="(pos, idx) in [
            '2/2',
            '2/2',
            '2/10',
            '2/10',
            '10/2',
            '10/2',
            '10/10',
            '10/10',
          ]"
          :key="idx"
          :dataId="idx"
          :gridArea="pos"
          bg-color="grey"
        >
        </GridPoint>
      </div>
      <h2>What is between dot grid...</h2>
    </div>
  </section>
  <section data-auto-animate>
    <div class="flex">
      <div class="grid-11">
        <GridPoint
          v-for="(pos, idx) in [
            '2/2/auto/span 9',
            '2/2',
            '2/10/span 9/auto',
            '2/10',
            '2/2/span 9',
            '10/2',
            '10/2/auto/span 9',
            '10/10',
          ]"
          :key="idx"
          :dataId="idx"
          :gridArea="pos"
          bg-color="grey"
        >
        </GridPoint>
      </div>
      <h2>and grid?</h2>
    </div>
  </section>
  <section data-auto-animate>
    <div class="flex">
      <div class="grid-11">
        <GridPoint
          v-for="(pos, idx) in [
            '1/2/span 3',
            '2/1/auto/span 3',
            '1/10/span 3',
            '2/9/auto/span 3',
            '9/2/span 3',
            '10/1/auto/span 3',
            '9/10/span 3',
            '10/9/auto/span 3',
          ]"
          :key="idx"
          :dataId="idx"
          :gridArea="pos"
          bg-color="grey"
        >
        </GridPoint>
      </div>
      <h2>A cross grid</h2>
    </div>
  </section>
  <section data-auto-animate>
    <div class="flex">
      <div class="grid-25">
        <GridPoint
          v-for="(pos, idx) in generateCrossGrid(3, 3)"
          :key="idx"
          :dataId="idx"
          :gridArea="pos"
          bg-color="grey"
        >
        </GridPoint>
      </div>
      <p>
        This also has the added benefit of implying structure by extending parts
        of the cross
      </p>
    </div>
  </section>
  <section data-auto-animate data-transition="fade-out">
    <div class="flex">
      <div class="grid-25">
        <GridPoint
          v-for="(pos, idx) in [
            '1/2/span 4',
            '2/1/auto/span 4',
            '1/10/span 3',
            '2/9/auto/span 3',
            '1/18/span 4',
            '2/16/auto/span 4',

            '9/2/span 3',
            '10/1/auto/span 3',
            '9/10/span 3',
            '10/9/auto/span 3',
            '9/18/span 3',
            '10/17/auto/span 3',

            '16/2/span 4',
            '18/1/auto/span 4',
            '17/10/span 3',
            '18/9/auto/span 3',
            '16/18/span 4',
            '18/16/auto/span 4',
          ]"
          :key="idx"
          :dataId="idx"
          :gridArea="pos"
          bg-color="grey"
        >
        </GridPoint>
      </div>
      <p>
        This also has the added benefit of implying structure by extending parts
        of the cross
      </p>
    </div>
  </section>
  <section>
    <h2>Ok but just having a cross grid is a little boring</h2>
  </section>
  <section data-auto-animate>
    <div class="flex">
      <div class="grid-35">
        <GridPoint
          v-for="(pos, idx) in generateCrossGrid(2, 2, 7, 28)"
          :key="idx"
          :dataId="idx + 100"
          :gridArea="pos"
          bg-color="grey"
        >
        </GridPoint>
      </div>
      <p>Sometimes I want to draw diagonally</p>
    </div>
  </section>
  <section data-auto-animate>
    <div class="flex">
      <div class="grid-35">
        <GridPoint
          v-for="(pos, idx) in generateCrossGrid(2, 2, 7, 28)"
          :key="idx"
          :dataId="idx + 100"
          :gridArea="pos"
          bg-color="grey"
        >
        </GridPoint>
        <div
          class="subgrid"
          v-for="(pos, idx) in ['1/1', '1/29', '29/1', '29/29']"
          :style="`grid-area: ${pos} / span 7 / span 7; transform: rotate(45deg)`"
          :data-id="idx"
        >
          <GridPoint
            v-for="(_pos, _idx) in generateCrossGrid(1, 1, 7, 28)"
            :key="_idx"
            :gridArea="_pos"
            bg-color="grey"
          >
          </GridPoint>
        </div>
      </div>
      <p>But putting diagonals on the crosses look too messy</p>
    </div>
  </section>
  <section data-auto-animate>
    <div class="flex">
      <div class="grid-35">
        <GridPoint
          v-for="(pos, idx) in generateCrossGrid(2, 2, 7, 28)"
          :key="idx"
          :dataId="idx + 100"
          :gridArea="pos"
          bg-color="grey"
        >
        </GridPoint>

        <div
          class="subgrid"
          style="grid-area: 15/15 / span 7 / span 7; transform: rotate(45deg)"
        >
          <GridPoint
            v-for="(pos, idx) in generateCrossGrid(1, 1, 7, 28)"
            :key="idx"
            :data-id="idx"
            :gridArea="pos"
            bg-color="grey"
          >
          </GridPoint>
        </div>
      </div>
      <div>
        <p>So instead I placed it in the middle</p>
        <p class="fragment">It also divides the squares into quarters</p>
      </div>
    </div>
  </section>
  <section data-auto-animate>
    <div class="flex">
      <div class="grid-35">
        <GridPoint
          v-for="(pos, idx) in generateCrossGrid(2, 2, 7, 28)"
          :key="idx"
          :dataId="idx + 100"
          :gridArea="pos"
          bg-color="grey"
        >
        </GridPoint>

        <div
          class="subgrid"
          style="grid-area: 15/15 / span 7 / span 7; transform: rotate(45deg)"
        >
          <GridPoint
            v-for="(pos, idx) in generateCrossGrid(1, 1, 7, 28)"
            :key="idx"
            :data-id="idx"
            :gridArea="pos"
            bg-color="grey"
          >
          </GridPoint>
        </div>
      </div>
      <div>
        <p>But I also want to be able to divide the squares into thirds</p>
      </div>
    </div>
  </section>
  <section data-auto-animate>
    <div class="flex">
      <div class="grid-35">
        <GridPoint
          v-for="(pos, idx) in generateCrossGrid(2, 2, 7, 28)"
          :key="idx"
          :dataId="idx + 100"
          :gridArea="pos"
          bg-color="grey"
          style="z-index: -100"
        >
        </GridPoint>

        <div
          class="subgrid"
          style="grid-area: 12/12 / span 13 / span 13; transform: rotate(45deg)"
        >
          <GridPoint
            v-for="(pos, idx) in generateCrossGrid(1, 1, 13, 28)"
            :key="idx"
            :data-id="idx"
            :gridArea="pos"
            bg-color="grey"
          >
          </GridPoint>
        </div>
        <div
          class="fragment subgrid"
          style="grid-area: 1/1 / span 35 / span 35"
        >
          <GridPoint
            v-for="(pos, idx) in [
              '4/4/4/span 29',
              '13/4/13/span 29',
              '23/4/23/span 29',
              '32/4/32/span 29',
              '4/4/span 29/4',
              '4/13/span 29/13',
              '4/23/span 29/23',
              '4/32/span 29/32',
            ]"
            :key="idx"
            :data-id="idx"
            :gridArea="pos"
            bg-color="rgba(255, 0, 0, .5)"
          >
          </GridPoint>
        </div>
      </div>
      <div>
        <p>
          So I increased the size of the X to the point where the tips can mark thirds
        </p>
      </div>
    </div>
  </section>
  <section :data-background-image="page">
    <section>
        <h1>This is what the grid looks like</h1>
    </section>
    <section>
        <h2>Colours taken from our brand guidelines</h2>
        <img src="https://upload.wikimedia.org/wikipedia/commons/d/d7/Wikimedia_Brand_Guidelines_Update_2022_Wikimedia_Colors_Creative-palette-strong.png" alt="">
    </section>
  </section>

  <!-- <section data-transition="fade-in">
    <section>
      <h1>How big should each grid square be?</h1>
    </section>
    <section>
      <h1>As big as I need to write</h1>
    </section>
  </section>
  <section data-auto-animate>
    <div class="flex" style="justify-content: space-around">
      <div class="grid-35">
        <div style="grid-area: 3/3 / span 7 / span 30; z-index: 100">
          <h1
            data-id="text"
            style="color: black; text-align: left; line-height: 10rem"
          >
            If I write this big...
          </h1>
        </div>
      </div>
    </div>
  </section>
  <section data-auto-animate data-transition="fade-out">
    <div class="flex" style="justify-content: space-around">
      <div class="grid-35">
        <div style="grid-area: 3/3 / span 7 / span 30; z-index: 100">
          <h1
            data-id="text"
            style="color: black; text-align: left; line-height: 10rem"
          >
            The grid should be the size of it
          </h1>
        </div>
        <GridPoint
          v-for="(pos, idx) in generateCrossGrid(5, 5)"
          :key="idx"
          :dataId="idx"
          :gridArea="pos"
          bg-color="rgb(200, 200, 200)"
        >
        </GridPoint>
      </div>
    </div>
  </section> -->
</template>
