<section>
	<aside>
		<nav>
			<ul>
				<li>
					<a href="/about/team">The Team</a>
				</li>
				<li>
					<a href="/about/story">The Story</a>
				</li>
				<li>
					<a href="/about/commitment">The Commitment</a>
				</li>
			</ul>
		</nav>
	</aside>
	<div class="main">
		<slot />
	</div>
</section>

<style>
	section {
		display: flex;
		gap: 2rem;
	}

	.main {
		flex: 1;
	}
</style>
