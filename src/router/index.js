import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('../views/Home.vue'),
      name: 'DefaultLayout',
      meta: {
        layout: 'DefaultLayout',
      },
    },
    {
      path: '/connect',
      component: () => import('../components/Connect.vue'),
      name: 'DefaultLayout',
    },
    {
      path: '/allnft',
      component: () => import('../views/item/AllNFT.vue'),
      name: 'all-nfts',
    },
    {
      path: '/collections',
      component: () => import('../views/collections/Index.vue'),
      children: [
        {
          path: 'my1',
          component: () => import('../views/collections/Collections.vue'),
          name: 'my-collections1',
        },
        {
          path: 'my',
          component: () => import('../views/collections/MyCollections.vue'),
          name: 'my-collections',
        },
        {
          path: 'trending',
          component: () => import('../views/collections/Trending.vue'),
          name: 'collections-trending',
        },
        {
          path: 'all',
          component: () => import('../views/collections/All.vue'),
          name: 'collections-all',
        },
        {
          path: 'items',
          component: () => import('../views/collections/Items.vue'),
          name: 'collections-items',
        },
        {
          path: 'description',
          component: () => import('../views/collections/Description.vue'),
          name: 'collections-description',
        },
        {
          path: 'activity',
          component: () => import('../views/collections/Activity.vue'),
          name: 'collections-activity',
        },
        {
          path: 'loyalties',
          component: () => import('../views/collections/Loyalties.vue'),
          name: 'collections-loyalties',
        },
        {
          path: 'create',
          component: () => import('../views/collections/Create.vue'),
          name: 'collections-create',
        },
        {
          path: 'edit/:id',
          component: () => import('../views/collections/Edit.vue'),
          name: 'collections-edit',
        },
        {
          path: 'detail/:id',
          component: () => import('../views/collections/Detail.vue'),
          name: 'collections-detail',
        },
      ],
      meta: {
        layout: 'DefaultLayout',
      },
    },
    {
      path: '/item',
      component: () => import('../views/item/Index.vue'),
      children: [
        {
          path: '',
          component: () => import('../views/item/Item.vue'),
          name: 'item',
        },
        {
          path: 'detail/:id',
          component: () => import('../views/item/Detail.vue'),
          name: 'item-detail',
        },
        {
          path: 'create',
          component: () => import('../views/item/Create.vue'),
          name: 'create-item',
        },
        {
          path: 'edit',
          component: () => import('../views/item/Edit.vue'),
          name: 'edit-item',
        },
      ],
    },
    {
      path: '/profile',
      component: () => import('../views/profile/Index.vue'),
      children: [
        {
          path: 'created',
          component: () => import('../views/profile/Created.vue'),
          name: 'profile-created',
        },
      ],
    },
    { path: '/:pathMatch(.*)*', component: () => import('../views/Home.vue') }
  ],
});

export default router;
