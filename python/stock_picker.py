def picker(prices):
    largest_profit = 0

    for i in range(len(prices)):
        for j in range(1, len(prices)):
            if i<j:
                profit = prices[j]-prices[i]
                if profit > largest_profit:
                    largest_profit = profit
                    buy_sell = [i, j]

    return buy_sell