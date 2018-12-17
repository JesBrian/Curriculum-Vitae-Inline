<template>
  <Layout>
    <Header>Header</Header>
    <Layout>
      <Sider hide-trigger style="background:#FFF;">
        Sider
        <RouterLink to="/Home/ChooseFormat">选择格式</RouterLink>
      </Sider>
      <Layout>
        <Content>
          <RouterView />
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  </Layout>
</template>

<script>

export default {
  name: 'home',
}
</script>
