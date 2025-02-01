<script setup lang="ts">
import continue_1 from "../assets/continue_1.png";
import continue_2 from "../assets/continue_2.png";
import continue_3 from "../assets/continue_3.png";
import page from "../assets/page.jpg";
</script>
<template>
  <section>
    <section>
      <h1>But I'm not done</h1>
    </section>
    <section>
      <h2>I wanted a way for pages to refer to each other</h2>
    </section>
    <section>
      <h2>Linked List System</h2>
      <img class="fragment" :src="continue_1" alt="" />
    </section>
    <section>
      <h2>But this means I need page numbers</h2>
      <h3 class="fragment">Which poses a serious problem</h3>
    </section>
    <section>
      <h3>There are two ways to use a notebook backwards:</h3>
      <ol>
        <li class="fragment">
          Flip the book around
          <ul>
            <li class="fragment">The last page is now the first page</li>
          </ul>
        </li>
        <li class="fragment">
          Turn the book upside-down
          <ul>
            <li class="fragment">The first page is still the first page</li>
          </ul>
        </li>
      </ol>
    </section>
    <section>
      <h2>Since the page numbers matter, I picked the second option</h2>
      <h3 class="fragment">But now I have to do a little redesign</h3>
      <img
        class="fragment"
        style="transform: rotate(180deg)"
        :src="continue_1"
        alt=""
      />
    </section>
    <section>
      <h2>A rotationally symmetric design</h2>
      <img class="fragment" style="height: 100px" :src="continue_2" alt="" />
    </section>
    <section>
      <h2>Except I forgot about the cover</h2>
      <h3 class="fragment">So I had to go the back-to-front approach</h3>
    </section>
    <section>
      <h2>Page numbers are arbitrary</h2>
    </section>
    <section>
      <h3>
        Putting two numbers on the same page might be confusing, but what if
        they're treated as one number?
      </h3>
    </section>
    <section>
      <h2>Fractional Units</h2>
      <h3 class="fragment">Assuming a 40 page notebook...</h3>
      <div class="flex" style="justify-content: space-around;">
        <h3 class="fragment">1/40</h3>
        <h3 class="fragment">20/21</h3>
        <h3 class="fragment">40/1</h3>
      </div>
    </section>
    <section>
      <img :src="continue_3" alt="">
    </section>
    <section>
      <img :src="page" style="height: 700px" alt="">
    </section>
    <aside class="notes">
      and then I realized that this means I need page numbers. Now this wouldn't
      be a problem for normal people, but sometimes I write in japanese. And
      sometimes, I use notebooks right to left. Now there are two ways to use a
      notebook backwards. you can either flip it around, or turn it upside down.
      Now because I have this page referrer feature, it made more sense to flip
      it upside down so the front page is still the front page but of course I
      can't have the word continue anymore, so I created a rotationally symetric
      design And then I remembered something. the cover will also be upside
      down. and I was already in this so deep I commissioned my friend to make
      some cover art, and I wasn't going to go back to her and ask if she can
      make it work upside down So I had to do the other way, where the back page
      becomes the first page. So how do I get around the page number issue? I
      can't have a page have two different numbers on it, but what I realized
      was that pages didn't have to be whole numbers. So I created a fractional
      system
    </aside>
  </section>
</template>
