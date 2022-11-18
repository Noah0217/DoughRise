<template>
<div class="dark:bg-gray-700">  
  <!--NavBar-->
<nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
  <div class="container flex flex-wrap items-center justify-between mx-auto">
  <a href="https://doughrise.co/" class=" flex items-center">
      <img src="https://media-exp1.licdn.com/dms/image/C560BAQHXTzMpa0XEFA/company-logo_200_200/0/1621269385894?e=1676505600&v=beta&t=-kYKH14W-sgS0hc8j-0YUyj8FG9_guMp0MhyMJIxZL8" class="h-6 mr-3 sm:h-9 rounded" alt="DoughRise Logo" />
      <span class=" self-center text-xl font-semibold whitespace-nowrap dark:text-white">DoughRise</span>
  </a>
  <div class="flex items-center md:order-2">
      <button type="button" class="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
        <img class="w-8 h-8 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6sGddmMZFZCqb7aJFx5eV-8FGj2gJWz7abGntj8IuyYdAv7W2HEJyi5WY3xbpLLzf-Zg&usqp=CAU" alt="user photo">
      </button>
      <h1 class="p-2 text-gray-700 dark:text-gray-400">User Name</h1>
      <div class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
        <div class="px-4 py-3">
        </div>
      </div>
  </div>
  <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
    <input type="search" class="form-control relative flex-auto min-w-0 block w-full px-9 py-0.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-900 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon2">
  </div>
  </div>
</nav>

<!--SideBar-->
<aside class="w-64" aria-label="Sidebar">
   <div class="overflow-y-auto py-5 px-5 bg-gray-50 rounded dark:bg-gray-800">
      <ul class="space-y-5">
         <li>
            <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              <svg class="w-6 h-6" data-darkreader-inline-stroke="" fill="none" stroke="currentColor" style="--darkreader-inline-stroke:currentColor;" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
               <span class="flex-1 ml-3 whitespace-nowrap font-bold font-mono text-lg">Home</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              <svg class="w-6 h-6" data-darkreader-inline-stroke="" fill="none" stroke="currentColor" style="--darkreader-inline-stroke:currentColor;" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
               <span class="flex-1 ml-3 whitespace-nowrap font-bold font-mono text-lg">Transactions</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              <svg class="w-6 h-6" data-darkreader-inline-stroke="" fill="none" stroke="currentColor" style="--darkreader-inline-stroke:currentColor;" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
               <span class="flex-1 ml-3 whitespace-nowrap font-bold font-mono text-lg">Goals</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
               <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
               <span class="flex-1 ml-3 whitespace-nowrap font-bold font-mono text-lg">Users</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
               <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd"></path></svg>
               <span class="flex-1 ml-3 whitespace-nowrap font-bold font-mono text-lg">Products</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
               <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clip-rule="evenodd"></path></svg>
               <span class="flex-1 ml-3 whitespace-nowrap font-bold font-mono text-lg">Sign In</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
               <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clip-rule="evenodd"></path></svg>
               <span class="flex-1 ml-3 whitespace-nowrap font-bold font-mono text-lg">Sign Up</span>
            </a>
         </li>
      </ul>
      <ul class="pt-4 mt-4 space-y-2 border-t border-gray-200 dark:border-gray-700">
         <li>
            <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
               <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:group-hover:text-white dark:text-gray-400" focusable="false" data-prefix="fas" data-icon="gem" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M378.7 32H133.3L256 182.7L378.7 32zM512 192l-107.4-141.3L289.6 192H512zM107.4 50.67L0 192h222.4L107.4 50.67zM244.3 474.9C247.3 478.2 251.6 480 256 480s8.653-1.828 11.67-5.062L510.6 224H1.365L244.3 474.9z"></path></svg>
               <span class="ml-4 font-bold font-mono text-lg">Upgrade to Pro</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
               <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"></path></svg>
               <span class="ml-3 font-bold font-mono text-lg">Documentation</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
               <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path></svg>
               <span class="ml-3 font-bold font-mono text-lg">Components</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
               <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z" clip-rule="evenodd"></path></svg>
               <span class="ml-3 font-bold font-mono text-lg">Help</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-10 text-base font-normal text-gray-900 rounded-lg transition duration-75">
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-10 text-base font-normal text-gray-900 rounded-lg transition duration-75">
            </a>
         </li>
      </ul>
   </div>
</aside>

<!--Cards--> 
<a class="absolute top-16 right-11 m-11 p-6 w-96 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Food</h5>
  <p class="font-normal text-gray-700 dark:text-gray-400">Spent 10% of $1000</p>
  <p class="text-right font-normal text-gray-700 dark:text-gray-400">$100</p>
  <div class="w-full h-86 bg-gray-200 rounded-full dark:bg-gray-700">
  <div class="h-2.5 bg-blue-600 rounded-full dark:bg-blue-500" style="width: 55%"></div>
</div>
</a>
<a class="absolute top-56 right-11 m-11 p-6 w-96 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Education</h5>
  <p class="font-normal text-gray-700 dark:text-gray-400">Spent 10% of $1000</p>
  <p class="text-right font-normal text-gray-700 dark:text-gray-400">$100</p>
  <div class="w-full h-86 bg-gray-200 rounded-full dark:bg-gray-700">
  <div class="h-2.5 bg-blue-600 rounded-full dark:bg-blue-500" style="width: 55%"></div>
</div>
</a>
<a class="absolute bottom-40 right-11 m-11 p-6 w-96 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Transportation</h5>
  <p class="font-normal text-gray-700 dark:text-gray-400">Spent 10% of $1000</p>
  <p class="text-right font-normal text-gray-700 dark:text-gray-400">$100</p>
  <div class="w-full h-86 bg-gray-200 rounded-full dark:bg-gray-700">
  <div class="h-2.5 bg-blue-600 rounded-full dark:bg-blue-500" style="width: 55%"></div>
</div>
</a>
<a class="absolute bottom-0.5 right-11 m-11 p-6 w-96 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Healthcare</h5>
  <p class="font-normal text-gray-700 dark:text-gray-400">Spent 10% of $1000</p>
  <p class="text-right font-normal text-gray-700 dark:text-gray-400">$100</p>
  <div class="w-full h-86 bg-gray-200 rounded-full dark:bg-gray-700">
  <div class="h-2.5 bg-blue-600 rounded-full dark:bg-blue-500" style="width: 55%"></div>
</div>
</a>
<a class="absolute bottom-80 right-11 m-11 p-6 w-96 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Shopping</h5>
  <p class="font-normal text-gray-700 dark:text-gray-400">Spent 10% of $1000</p>
  <p class="text-right font-normal text-gray-700 dark:text-gray-400">$100</p>
  <div class="w-full h-86 bg-gray-200 rounded-full dark:bg-gray-700">
  <div class="h-2.5 bg-blue-600 rounded-full dark:bg-blue-500" style="width: 55%"></div>
</div>
</a>
<a class="absolute bottom-20 left-60 m-20 p-6 w-96 h-64 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">April Budget</h5>
  <p class="text-2xl font-bold p-3 text-gray-700 dark:text-gray-400">$2000</p>
  <p class="text-right text-2xl text-gray-700 dark:text-gray-400">$800</p>
  <div class="w-full h-86 bg-gray-200 rounded-full dark:bg-gray-700">
  <div class="h-4 bg-blue-600 rounded-full dark:bg-blue-500" style="width: 75%">
  <p class="p-4 text-sm text-gray-700 dark:text-gray-400">You spent $1,200 of $2,000</p>
</div>
</div>
</a>
<a class="absolute top-20 left-60 m-20 p-6 w-96 h-64 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">March Budget</h5>
  <p class=" text-2xl font-bold p-3 text-gray-700 dark:text-gray-400">$2000</p>
  <p class="text-right text-2xl text-gray-700 dark:text-gray-400">$800</p>
  <div class="w-full h-86 bg-gray-200 rounded-full dark:bg-gray-700">
  <div class="h-4 bg-blue-600 rounded-full dark:bg-blue-500" style="width: 75%">
  <p class="p-4 text-sm text-gray-700 dark:text-gray-400">You spent $1,200 of $2,000</p>
</div>
</div>
</a>

<!--Footer-->
<footer class="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
    <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://doughrise.co/" class="hover:underline">DoughRise™</a>. All Rights Reserved.
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
        </li>
        <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
        </li>
        <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">Licensing</a>
        </li>
        <li>
            <a href="#" class="hover:underline">Contact</a>
        </li>
    </ul>
</footer>


</div>
<router-view />
</template>



<style src="./assets/tailwind.css"/>
