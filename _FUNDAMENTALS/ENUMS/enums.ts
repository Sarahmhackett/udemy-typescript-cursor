// Named Consts that we can reuse throughout code

const enum OrderStatus {
  PENDING,
  SHIPPED,
  DELIVERED,
  RETURNED,
}

const orderStatus = OrderStatus.DELIVERED;

function isDelivered(order: OrderStatus) {
  return orderStatus === OrderStatus.DELIVERED;
}

isDelivered(OrderStatus.DELIVERED);

const enum ArrowKeys {
  UP = "up",
  DOWN = "down",
  LEFT = "left",
  RIGHT = "right",
}

ArrowKeys.UP;
