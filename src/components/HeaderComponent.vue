
<template>
  <header class="header bg-body-secondary">
    <h2 class="header__title">Online Store</h2>

    <ul class="header-left-wrapper">
      <li class="nav__list--item">
        <a href="/hi" class="header__icon header__user--link"></a>
      </li>

      <li class="nav__list--item">
        <a href="#" class="header__icon header__favorite--products"></a>
      </li>

      <li class="nav__list--item">
        <a href="#" class="header__icon header__shopping--cart"></a>
      </li>
    </ul>
  </header>
</template>

<style scoped>

.header {
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: space-between;
  border-radius: 0 0 1rem 1.5rem;
}

.header-left-wrapper {
  display: flex;
  gap: 1rem;
}
.nav__list--item {
  cursor: pointer;
  transition: transform 0.3s ease;
  padding: 0.5rem;
}

.nav__list--item:hover {
  transform: scale(1.2);
}

.header__icon {
  display: inline-block;
  background-size: contain;
  background-repeat: no-repeat;
  width: 1.5rem;
  height: 1.5rem;
}

.header__user--link {
  background-image: url('./icons/user.svg');
}

.header__favorite--products {
  background-image: url('./icons/favorite.svg');
}

.header__shopping--cart {
  background-image: url('./icons/shopping-cart.svg');
}
</style>

