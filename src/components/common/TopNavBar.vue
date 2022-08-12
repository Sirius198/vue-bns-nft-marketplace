<template>
  <nav class="bg-white shadow-lg">
    <div class="px-4 w-screen">
      <div class="flex justify-between">
        <ul class="flex items-center">
          <!-- add button -->
          <li>
            <a href="/">
              <img class="w-48 min-w-full mt-1.5 sm:mt-0.5 h-10" src="../../assets/images/bns-logo.png"
                alt="svelte logo" /></a>
          </li>
        </ul>
        <ul class="hidden md:flex items-center">
          <!-- add button -->
          <li class="hidden md:block">
            <SearchBar class="md:w-62 xl:w-96" placeholder="Search for NFTs, collections and profiles" />
          </li>

          <li class="hidden md:block">
            <div class="bns-btn-bg relative">
              <button class="bns-balance-button absolute">
                <i class="bns-balance-icon">
                  <img src="../../assets/images/b-icon.svg" />
                </i>
                <span class="bns-balance">
                  <span class="font-bold"> FUDGE </span>
                  <span>$4.226</span>
                </span>
              </button>
            </div>
          </li>
        </ul>
        <ul class="hidden md:flex items-center">
          <li class="hidden xl:block">
            <div class="flex items-center justify-center">
              <div class="relative inline-block text-left dropdown">
                <span class="rounded-md shadow-sm"><button
                    class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-white rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800"
                    type="button" aria-haspopup="true" aria-expanded="true" aria-controls="headlessui-menu-items-117">
                    <span class="default-font">Explore</span>
                    <svg class="w-5 h-5 ml-2 -mr-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"></path>
                    </svg></button></span>
                <div
                  class="opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95">
                  <div
                    class="absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none"
                    aria-labelledby="headlessui-menu-button-1" id="headlessui-menu-items-117" role="menu">
                    <div class="py-1">
                      <a href="javascript:void(0)" tabindex="0" @click="() => $router.push({ name: 'all-nfts' })"
                        class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
                        role="menuitem">Browse NFTs</a>
                      <a href="/collections/trending" tabindex="0"
                        class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
                        role="menuitem">Trending Collections</a>
                      <a href="/collections/all" tabindex="0"
                        class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
                        role="menuitem">All Collections</a>
                      <a href="/collections/my" tabindex="0"
                        class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
                        role="menuitem">My Collections</a>
                      <a href="javascript:void(0)" tabindex="0"
                        class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
                        role="menuitem">Trending Artists</a>
                      <a href="javascript:void(0)" tabindex="0"
                        class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
                        role="menuitem">Notable drops</a>
                      <span role="menuitem" tabindex="-1"
                        class="flex justify-between w-full px-4 py-2 text-sm leading-5 text-left text-gray-700 cursor-not-allowed opacity-50"
                        aria-disabled="true">New feature (soon)</span>
                    </div>
                    <div class="py-1">
                      <a href="javascript:void(0)" tabindex="3"
                        class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
                        role="menuitem">Sign out</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li class="hidden xl:block" v-if="states?.status === WalletStatus.WALLET_NOT_CONNECTED">
            <span class="flex-shrink-0 default-font mr-5">Market</span>
          </li>
          <li class="mx-5 hidden xl:block">
            <span class="flex-shrink-0 default-font">Activity</span>
          </li>
          <li class="mr-3 hidden xl:block">
            <span class="flex-shrink-0 default-font">Stake</span>
          </li>
          <li class="hidden xl:block">
            <div class="flex justify-center">
              <div class="relative inline-block text-left dropdown">
                <span class="rounded-md shadow-sm"><button
                    class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-white rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800"
                    type="button" aria-haspopup="true" aria-expanded="true" aria-controls="headlessui-menu-items-117">
                    <span class="default-font">Community</span>
                    <svg class="w-5 h-5 ml-2 -mr-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"></path>
                    </svg></button></span>
                <div
                  class="opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95">
                  <div
                    class="absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none"
                    aria-labelledby="headlessui-menu-button-1" id="headlessui-menu-items-117" role="menu">
                    <div class="py-1">
                      <a href="javascript:void(0)" tabindex="0"
                        class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
                        role="menuitem">Account settings</a>
                      <span role="menuitem" tabindex="-1"
                        class="flex justify-between w-full px-4 py-2 text-sm leading-5 text-left text-gray-700 cursor-not-allowed opacity-50"
                        aria-disabled="true">New feature (soon)</span>
                    </div>
                    <div class="py-1">
                      <a @click.prevent="disconnectWallet" href="javascript:void(0)" tabindex="3"
                        class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
                        role="menuitem">Sign out</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="flex justify-center" v-if="states?.status === WalletStatus.WALLET_NOT_CONNECTED">
              <div class="relative inline-block text-left dropdown">
                <span class="rounded-md shadow-sm"><button
                    class="conntect-wallet-btn text-white font-bold py-2 px-4 rounded" type="button"
                    aria-haspopup="true" aria-expanded="true" aria-controls="headlessui-menu-items-117">
                    <span class="default-font">Connect Wallet</span>
                  </button></span>
                <div
                  class="opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95">
                  <div
                    class="absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none"
                    aria-labelledby="headlessui-menu-button-1" id="headlessui-menu-items-117" role="menu">
                    <div v-if="availableInstallTypes.includes(ConnectType.EXTENSION)" class="py-1 hover:bg-violet-100"
                      @click="controller.install(availableInstallTypes[0])">
                      <a href="javascript:void(0)" tabindex="0"
                        class="text-gray-700 flex justify-between w-full px-4 py-0.5 text-sm leading-5 text-left"
                        role="menuitem">
                        Install extension
                      </a>
                    </div>
                    <div
                      v-if="!availableInstallTypes.includes(ConnectType.EXTENSION) && availableConnections[0].type === ConnectType.EXTENSION"
                      class="py-1 hover:bg-violet-100" v-on:click="
                        connectWallet(
                          availableConnections[0].type,
                          availableConnections[0].identifier
                        )
                      ">
                      <a href="javascript:void(0)" tabindex="0"
                        class="text-gray-700 flex justify-between w-full px-4 py-0.5 text-sm leading-5 text-left"
                        role="menuitem">{{ availableConnections[0].name }} </a>
                    </div>
                    <div class="py-1 hover:bg-violet-100" @click="
                    connectWallet(
                      availableConnections[1].type,
                      availableConnections[1].identifier
                    )">
                      <a href="javascript:void(0)" tabindex="0"
                        class="text-gray-700 flex justify-between w-full px-4 py-0.5 text-sm leading-5 text-left"
                        role="menuitem">{{ availableConnections[1].name }}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex" v-if="states?.status === WalletStatus.WALLET_CONNECTED">
              <button class="conntect-wallet-btn text-white font-bold py-1 px-3 text-sm rounded h-9 mt-0.5" @click="() => $router.push({ name: 'create-item' })">
                Create
              </button>

              <PhotographIcon class="mx-2 w-10 h-11 cursor-pointer text-gray-400"
                @click="() => $router.push({ name: 'profile-created' })" />
              <img v-on:click="controller.disconnect()" src="../../assets/images/wallet.svg" alt="" />
            </div>
          </li>
        </ul>
        <div class="md:hidden flex items-center">
          <button @click="showMobileMenu = !showMobileMenu"
            class="p-1 rounded-md hover:bg-gray-100 focus:bg-gray-100 focus:outline-none">
            <svg viewBox="0 0 20 20" fill="currentColor" class="w-6 h-6 text-gray-700 dark:text-gray-300">
              <path fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div v-if="showMobileMenu" :class="{ hidden: !showMobileMenu, block: showMobileMenu }"
      class="container px-4 py-5 mx-auto space-y-4 lg:space-y-0 lg:flex lg:items-center lg:justify-between lg:space-x-10">
      <div class="flex flex-col space-y-4 lg:hidden" style="">
        <div class="flex flex-col space-y-3 lg:space-y-0 lg:flex-row lg:space-x-6 xl:space-x-8 lg:items-center">
          <a href="/" class="text-gray-500 hover:text-gray-800">Home</a>
          <a href="#" class="text-gray-500 lg:hidden">Explore</a>

          <a href="#" class="text-gray-500">Market</a>
          <a href="#" class="text-gray-500">Activity</a>
          <a href="#" class="text-gray-500">Stake</a>
          <a href="#" class="text-gray-500">Community</a>
        </div>

        <div class="flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:items-center lg:space-x-4">
          <form action="/search" class="flex flex-wrap justify-between md:flex-row">
            <input type="search" name="query" placeholder="Search for NFTs, collections and profiles"
              required="required"
              class="w-full h-12 px-4 text-sm text-gray-700 bg-white border border-gray-300 rounded-lg lg:w-20 xl:transition-all xl:duration-300 xl:w-36 xl:focus:w-44 lg:h-10 focus:border-teal-500 focus:outline-none focus:ring focus:ring-primary focus:ring-opacity-40 bg-gray-100" />
          </form>
          <div class="flex">
            <div class="bns-btn-bg relative">
              <button class="bns-balance-button absolute">
                <i class="bns-balance-icon">
                  <img src="../../assets/images/b-icon.svg" />
                </i>
                <span class="bns-balance">
                  <span class="font-bold"> FUDGE </span>
                  <span>$4.226</span>
                </span>
              </button>
            </div>
            <div class="ml-5 mt-1">
              <button v-if="states?.status === WalletStatus.WALLET_NOT_CONNECTED"
                class="conntect-wallet-btn text-white font-bold py-2 px-4 rounded">
                Connect Wallet
              </button>
              <div class="flex" v-if="states?.status === WalletStatus.WALLET_CONNECTED">
                <button class="conntect-wallet-btn text-white font-bold py-1 px-3 text-sm rounded h-9 w-24">
                  Create
                </button>

                <PhotographIcon class="mx-2 -mt-0.5 w-10 h-11 text-gray-400" />
                <img class="-mt-0.5" src="../../assets/images/wallet.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script setup lang="ts">
import { PhotographIcon } from '@heroicons/vue/outline';
import SearchBar from './SearchBar.vue';

import {
  Connection,
  ConnectType,
  WalletStates,
  WalletStatus,
  WalletInfo,
} from '@terra-money/wallet-controller';
import { getController } from 'controller';
import { onMounted, onUnmounted, ref, onUpdated } from 'vue';
import { Subscription, combineLatest } from 'rxjs';

const controller = getController();
const availableConnectTypes = ref<ConnectType[]>([]);
const availableInstallTypes = ref<ConnectType[]>([]);
const availableConnections = ref<Connection[]>([]);
const states = ref<WalletStates | null>(null);
const supportFeatures = ref<string[]>([]);
let subscription: Subscription | null = null;
const isConnected = ref(false);
const showMobileMenu = ref(false);

const props = defineProps({
  avatarImageUrl: {
    type: String,
    required: false,
  },
});

onMounted(() => {
  subscription = combineLatest([
    controller.availableConnectTypes(),
    controller.availableInstallTypes(),
    controller.availableConnections(),
    controller.states(),
  ]).subscribe(
    ([
      _availableConnectTypes,
      _availableInstallTypes,
      _availableConnections,
      _states,
    ]) => {
      availableInstallTypes.value = _availableInstallTypes;
      availableConnectTypes.value = _availableConnectTypes;
      availableConnections.value = _availableConnections;
      states.value = _states;
      supportFeatures.value =
        _states.status === WalletStatus.WALLET_CONNECTED
          ? Array.from(_states.supportFeatures)
          : [];
    }
  );
});
onUnmounted(() => {
  subscription?.unsubscribe();
});

onUpdated(() => {
  if (!!states && WalletStatus.WALLET_CONNECTED) {
    const states_ = JSON.stringify(states.value);
    const updated = JSON.parse(states_);
    const wallets: Array<WalletInfo> = updated?.wallets;
    if (wallets && wallets.length > 0) {
      const address = wallets[0].terraAddress;
      localStorage.setItem("wallet", address)
    }
  }
});

// console.log(states.value)
async function connectWallet(type: ConnectType, identifier: string) {
  await controller.connect(type, identifier);
}
</script>

<style scoped src="../../assets/css/navbar.css">
</style>
