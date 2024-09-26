<script>
    import Logo from "$lib/assets/brand/logo.png";
</script>


<div class="navigation">
    <div class="navigation-left">
        <img src="{Logo}" alt="Holadok Brand Logo" >
    </div>
    <nav class="navigation-center">
        <ul>
            <li class="active">
                <a href="#">Home</a>
            </li>
            <li>
                <a href="#">Features</a>
            </li>
            <li>
                <a href="#">Blog</a>
            </li>
            <li>
                <a href="#">About Us</a>
            </li>
        </ul>
    </nav>

    <div class="navigation-right">
        <span>
            <a href="#">Login</a>
        </span>
        <span class="bordered">
            <a href="#">Book Now</a>
        </span>
    </div>
</div>

<style lang='postcss'>
    *  {
        /* border: 1px solid red; */
        @apply text-sm 
    }

    .navigation {
        @apply 
        flex w-full justify-between items-center absolute
        py-2 
    }

    .navigation-left img {
        @apply w-full h-7
    }

    .navigation-center > ul , .navigation-right > span  {
        @apply px-1 py-1
    }
    .navigation-center  ul {
        @apply flex flex-row gap-4
    }

    .navigation-center  ul li:hover {
        @apply underline
    }


    .navigation-center  ul li.active{
        @apply font-semibold
    }

    .navigation-center  ul li:not(.active){
        @apply font-thin
    }
    .navigation-right {
        @apply flex flex-row gap-4 font-semibold
    }

    .navigation-right span.bordered {
        @apply border border-black rounded-sm px-3
    }
</style>