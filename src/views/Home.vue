<template>
  <DefaultLayout>
    <div class="bg-image">
      <div class="grid md:grid-cols-2 px-5  md:px-10 lg:px-10 xl:px-24">
        <div class="cover mt-20 md:mt-36">
          <span class="intro text-2xl sm:text-4xl md:text-5xl"
            >Discover the art of the <span class="future">future</span
            ><span class="dot">.</span></span
          >
          <span class="description xl:font-semibold xl:text-description text-xs md:text-base">
            Bake ‘N Stake marketplace is a 
            decentralized NFT exchange to create, 
            collect and trade extraordinary NFTs
          </span>

          <button @click.prevent="$router.push({name: 'create-item'})"
            class="drop-shadow-xl w-full md:w-32 mt-10 bg-white grad-border cursor-pointer h-10"
          >
            <span class="grad-text">Create NFT</span>
          </button>
        </div>
        <div class="hidden lg:block">
          <i class="sub2 rounded-lg"></i>
          <i class="sub xl:mr-10"></i>
          <div class="shadow"></div>
          <i class="e1"></i>
          <i class="e2"></i>
          <!-- <i class="e3"></i> -->
          <div class="d-shadow">
            <div class="featured rounded-xl overflow-hidden">
              <img
                class="w-full h-full"
                src="https://media.gettyimages.com/photos/beautiful-black-female-fantasy-princess-in-a-rural-heather-fairytale-picture-id1344716112"
              />
            </div>
          </div>
          <div class="featured-author">
            <img
              class="w-10 rounded-md h-10 featured-author-image"
              src="https://images.unsplash.com/photo-1640237499731-a725738c5954?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              alt=""
            />
            <div class="ml-5 -mt-0.5">
              <span class="text-gray-500">#269 Nostalgia</span>
              <p class="text-sm text-blue-500">Your inner power</p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div>
        <div class="top-collections md:mt-40">
          <div
            class="flex xl:my-10 mt-10 mx-5 sm:mx-11 md:mx-11 lg:mx-12 xl:mx-32 2xl:mx-44 justify-center justify-between"
          >
            <h1 class="top-collections-text text-2xl md:text-3xl">
              Top Collections
            </h1>
            <div class="flex">
              <button class="rounded w-20 text-lg view-all-btn bns-purple">
                view all
              </button>
              <button
                class="rounded text-lg ml-5 mr-3 view-all-btn hidden sm:block"
              >
                <ChevronLeftIcon class="w-7 h-7 bns-purple" />
              </button>
              <button class="rounded text-lg view-all-btn hidden sm:block">
                <ChevronRightIcon class="w-7 h-7 bns-purple" />
              </button>
            </div>
          </div>
          
          <div class="sm:mx-0 flex justify-center">
            <div
              class="grid grid-cols-2 gap-2 place-content-center sm:grid-cols-2 md:grid-cols-4 md:mx-5 mt-7 2xl:mx-28"
            >
              <NFTCollection @click.prevent="() => $router.push({name: 'collections-trending'})"
                class="cursor-pointer sm:mx-1.5 w-48 h-56 sm:w-52 md:w-44 md:h-58 lg:h-60 xl:w-72 sm:my-0"
                v-for="index in 4"
                :key="index"
                coverImage="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F6170e01f8d7639b95a7f2eeb%2FSotheby-s-NFT-Natively-Digital-1-2-sale-Bored-Ape-Yacht-Club--8817-by-Yuga-Labs%2F0x0.png%3Ffit%3Dscale"
              />
            </div>
          </div>
        </div>
        <div class="top-collections xl:mt-20">
          <div
            class="flex mt-10 mx-5 sm:mx-11 md:mx-11 lg:mx-12 xl:mx-32 2xl:mx-44 justify-center justify-between"
          >
            <h1 class="top-collections-text text-2xl md:text-3xl">
              Trending NFTs
            </h1>
            <div class="flex">
              <button class="rounded w-20 text-lg view-all-btn bns-purple">
                view all
              </button>
              <button
                class="rounded text-lg ml-5 mr-3 view-all-btn hidden sm:block"
              >
                <ChevronLeftIcon class="w-7 h-7 bns-purple" />
              </button>
              <button class="rounded text-lg view-all-btn hidden sm:block">
                <ChevronRightIcon class="w-7 h-7 bns-purple" />
              </button>
            </div>
          </div>

          <div class="flex justify-center">
            <div
              class="grid grid-cols-2 gap-2 place-content-center sm:grid-cols-2 md:grid-cols-4 md:mx-5 mt-7 2xl:mx-28"
            >
              <NFTWrapper
                class="mb-10 sm:mb-0 sm:mx-1.5 w-48 h-56 sm:w-52 sm:h-60 md:w-44 md:h-48 lg:h-64 xl:w-72 sm:my-0"
                v-for="index in 4"
                :key="index"
                coverImage="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F6170e01f8d7639b95a7f2eeb%2FSotheby-s-NFT-Natively-Digital-1-2-sale-Bored-Ape-Yacht-Club--8817-by-Yuga-Labs%2F0x0.png%3Ffit%3Dscale"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="about-container mt-32 xl:mt-44 h-96 w-screen">
        <AboutFudge />
      </div>
      <div class="mt-36">
        <div class="top-collections">
          <div
            class="flex mt-10 mx-5 sm:mx-11 md:mx-11 lg:mx-12 xl:mx-32 2xl:mx-44 justify-center justify-between"
          >
            <h1 class="top-collections-text text-2xl md:text-3xl">
              Recent drops
            </h1>
            <div class="flex">
              <button class="rounded w-20 text-lg view-all-btn bns-purple">
                view all
              </button>
              <button
                class="rounded text-lg ml-5 mr-3 view-all-btn hidden sm:block"
              >
                <ChevronLeftIcon class="w-7 h-7 bns-purple" />
              </button>
              <button class="rounded text-lg view-all-btn hidden sm:block">
                <ChevronRightIcon class="w-7 h-7 bns-purple" />
              </button>
            </div>
          </div>

          <div class="flex justify-center">
            <div
              class="grid grid-cols-2 gap-2 place-content-center sm:grid-cols-2 md:grid-cols-4 md:mx-5 mt-7 2xl:mx-28"
            >
              <NFTWrapper
                :isRecent="true"
                class="mb-10 sm:mb-0 sm:mx-1.5 w-48 h-56 sm:w-52 sm:h-60 md:w-44 md:h-48 lg:h-64 xl:w-72 sm:my-0"
                v-for="index in 4"
                :key="index"
                coverImage="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F6170e01f8d7639b95a7f2eeb%2FSotheby-s-NFT-Natively-Digital-1-2-sale-Bored-Ape-Yacht-Club--8817-by-Yuga-Labs%2F0x0.png%3Ffit%3Dscale"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-center mt-10 lg:mt-32 relative">
        <div class="efwys-container relative overflow-hidden">
          <i class="mr1 absolute -bottom-8"></i>
          <i class="mr2 absolute -bottom-14"></i>
          <i class="mr3 absolute -bottom-16 left-36"></i>
          <i class="mr4 absolute -bottom-16"></i>
          <i class="mr5 absolute -bottom-16"></i>
          <i class="mr6 absolute -bottom-16"></i>
          <div class="flex justify-center flex-col">
            <div class="efwya-text1 text-3xl sm:text-5xl mt-7 z-10">
              Earn FUDGE, while you sleep!
            </div>
            <div
              class="text-white px-3 sm:px-0 text-center mt-3 leading-5 z-10"
            >
              NFTs are an exciting way to invest in cryptocurrency. You can
              stake them <br />
              securely on your own blockchain and get rewarded for supporting
              its
              <br />
              operations with a little bit of crypto each day. <br /><br />NFTs
              are an exciting way to invest in cryptocurrency. You can stake
              them
              <br />
              securely on your own blockchain and get rewarded for supporting
              its
              <br />
              operations with a little bit of crypto each day.
            </div>
            <div class="flex justify-center z-10">
              <button
                class="cursor-pointer mt-5 bg-white grad-border text-white font-bold py-2 px-4 w-48 text-2xl rounded bns-purple"
              >
                Explore
              </button>
            </div>
          </div>
        </div>
        <i class="shopping-bag p-8 z-10 absolute -bottom-20 hidden sm:block">
          <img
            class="w-full h-full mt-10"
            src="../assets/images/shopping-bag.png"
            alt=""
          />
        </i>
      </div>
      <div
        class="giveaway w-full my-16 pb-10 grid grid-cols-1 md:grid-cols-2 xl:flex justify-center px-2 sm:px-10 md:px-10 lg:px-10 xl:px-28"
      >
        <div class="md:mt-20 md:mt-36">
          <img src="../assets/images/gift.png" alt="" />
        </div>
        <div class="px-4 md:ml-14 mt-20 md:mt-32">
          <h1 class="giveaway-text">Giveaways</h1>
          <div class="mt-5 giveaway-lead">
            <p>
              We've got a blast of FUDGE and an eyeful for your NFT needs!
              <br class="hidden xl:block" />
              Enter now, buy one or more. You'll be entered every week in our
              <br class="hidden xl:block" />
              drawing with 10 lucky winners who get all of these prizes.
            </p>
            <p
              class="mt-5"
              :class="{ block: readmore, 'hidden xl:block': !readmore }"
            >
              The winner will be automatically and immediatelly transferred
              <br class="hidden xl:block" />
              their FUDGE a day after drawing is complete. We've got a blast
              <br class="hidden xl:block" />
              of FUDGE and an eyeful for your NFT needs! Enter now, buy one
              <br class="hidden xl:block" />or more. You'll be entered every
              week in our drawing with 10
              <br class="hidden xl:block" />
              lucky winners who get all of these prizes.
            </p>
            <p
              class="mt-5"
              :class="{ block: readmore, 'hidden xl:block': !readmore }"
            >
              The winner will be automatically and immediatelly transferred<br
                class="hidden xl:block"
              />
              their FUDGE a day after drawing is complete.
            </p>
            <p
              class="mt-5"
              :class="{ block: readmore, 'hidden xl:block': !readmore }"
            >
              The winner will be automatically and immediatelly transferred
              <br class="hidden xl:block" />
              their FUDGE a day after drawing is complete.
            </p>
            <span
              @click="readmore = !readmore"
              class="bns-purple cursor-pointer xl:hidden"
              >{{ readmore ? 'Close' : '...Read more' }}</span
            >
          </div>
          <button
            class="cursor-pointer mt-5 bg-white grad-border font-bold py-2 px-4 w-48 text-2xl rounded"
          >
            <span class="grad-text">Explore</span>
          </button>
        </div>
      </div>
      <div class="mt-20">
        <div class="top-collections">
          <div
            class="flex mt-10 mx-5 sm:mx-11 md:mx-11 lg:mx-12 xl:mx-32 2xl:mx-44 justify-center justify-between"
          >
            <h1 class="top-collections-text text-2xl md:text-3xl">
              Browse by categories
            </h1>
          </div>
          <div class="flex justify-center">
            <div
              class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 mt-7"
            >
              <NFTCategory
                v-for="(category, index) in categories"
                :key="index"
                :categoryName="category.name"
                :coverImage="category.image"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="mt-5">
        <div class="top-collections">
          <div
            class="flex mt-10 mx-5 sm:mx-7 md:mx-14 lg:mx-12 xl:mx-32 2xl:mx-44 justify-center justify-between"
          >
            <h1 class="top-collections-text bns-purple text-2xl md:text-3xl">
              Create and sell your NFTs
            </h1>
          </div>
          <div class="flex justify-center">
            <div
              class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-2 mt-7"
            >
              <Step
                class="w-64 md:w-72 lg:w-48 xl:w-64 mr-8 mb-7 lg:mb-0"
                v-for="(step, index) in steps"
                :key="index"
                :step="step"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>
<script>
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/vue/solid';
import image from '../assets/images/nft1.png';
import NFTCollection from '../components/common/NFTCollection.vue';
import NFTWrapper from '../components/common/NFTWrapper.vue';
import NFTCategory from '../components/common/NFTCategory.vue';
import { CATEGORIES, STEPS } from '../components/common/Common';
import Step from '../components/common/Step.vue';
import Footer from '../components/common/Footer.vue';
import AboutFudge from '../components/common/AboutFudge.vue';
export default {
  components: {
    ChevronRightIcon,
    ChevronLeftIcon,
    NFTCollection,
    NFTWrapper,
    NFTCategory,
    Step,
    Footer,
    AboutFudge
  },
  data() {
    return {
      image,
      readmore: false,
      categories: CATEGORIES,
      steps: STEPS,
    };
  },
};
</script>
<style scoped src="../assets/css/homepage.css"></style>
