<template>
  <!--NavBar-->
<nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
  <div class="container flex flex-wrap items-center justify-between mx-auto">
  <a href="https://doughrise.co/" class="flex items-center">
      <img src="https://media-exp1.licdn.com/dms/image/C560BAQHXTzMpa0XEFA/company-logo_200_200/0/1621269385894?e=1676505600&v=beta&t=-kYKH14W-sgS0hc8j-0YUyj8FG9_guMp0MhyMJIxZL8" class="h-6 mr-3 sm:h-9" alt="DoughRise Logo" />
      <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">DoughRise</span>
  </a>
  <div class="flex items-center md:order-2">
      <button type="button" class="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
        <img class="w-8 h-8 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6sGddmMZFZCqb7aJFx5eV-8FGj2gJWz7abGntj8IuyYdAv7W2HEJyi5WY3xbpLLzf-Zg&usqp=CAU" alt="user photo">
      </button>
      <div class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
        <div class="px-4 py-3">
        </div>
      </div>
  </div>
  <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
    <input type="search" class="form-control relative flex-auto min-w-0 block w-full px-9 py-0.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon2">
  </div>
  </div>
</nav>

</template>



<style src="./assets/tailwind.css"/>
