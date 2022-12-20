export default () => null

export const getServerSideProps = () => ({
  redirect: {
    destination: '/orders',
    permanent: false,
  },
})
