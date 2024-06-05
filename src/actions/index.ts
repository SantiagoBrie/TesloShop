export {deleteUSerAddress} from './address/delete-user-address'
export {getUserAddress} from './address/get-user-address'
export {setUSerAddress} from './address/set-user-address'

export * from './auth/login'
export {logout} from './auth/logout'
export {registerUser} from './auth/register'

export {getCategories} from './category/get-categories'

export {getCountries} from './country/get-countries'

export {getOrderById} from './order/get-order-by-id'
export {getOrdersByUser} from './order/get-orders-by-user'
export {getPaginatedOrders} from './order/get-paginated-orders'
export {placeOrder} from './order/place-order'

export {paypalCheckPayment} from './payments/paypal-check-payment'
export {setTransactionId} from './payments/set-transaction-id'

export {createUpdateProduct} from './product/create-update-product'
export {deleteProductImage} from './product/delete-producto-image'
export {getProductBySlug} from './product/get-product-by-slug'
export {getStockBySlug} from './product/get-stock-by-slug'
export {getPaginatedProductsWithImages} from './product/product-pagination'

export {changeUserRole} from './users/change-user-role'
export {getPaginatedUsers} from './users/get-paginated-users'