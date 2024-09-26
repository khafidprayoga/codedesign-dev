<script lang="ts">
	import { IconBell, IconCalendarMonth, IconDeviceComputerCamera } from '@tabler/icons-svelte';
</script>

<div class="footer">
    <div class="footer-left">
        <i>
            <IconCalendarMonth stroke={2} />
        </i>

        <div class="feature-description">
            <h2>Online appointment scheduling</h2>
            <p>Allows users to schedule appointments with their healthcare provider through the app.</p>
        </div>
    </div>

    <div class="footer-center">
        <i>
            <IconBell stroke={2} />
        </i>

        <div class="feature-description">
            <h2>Medication reminders</h2>
            <p>Allows users to schedule appointments with their healthcare provider through the app.</p>
        </div>
    </div>
    <div class="footer-right">
        <i>
            <IconDeviceComputerCamera stroke={2} />
        </i>
        <div class="feature-description">
            <h2>Virtual consultations</h2>
            <p>Allows users to schedule appointments with their healthcare provider through the app.</p>
        </div>
    </div>
</div>

<style lang="postcss">

.footer {
		@apply flex flex-row justify-between gap-3 bg-primary text-gray-100 rounded-sm;
	}

	.footer div {
		@apply flex flex-row gap-1  px-10 py-10;
	}

	.footer > div > i {
		@apply py-1;
	}
	.footer > div > div {
		@apply flex flex-col px-5 py-1;
	}
	.feature-description > p {
		@apply font-thin text-sm;
	}
</style>