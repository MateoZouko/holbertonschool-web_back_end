#!/usr/bin/env python3
"""
   Task 1
"""
import asyncio
from typing import List
wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """Let's execute multiple coroutines at the same time with async"""
    delays: List = [wait_random(max_delay) for _ in range(n)]

    aDelays: List = await asyncio.gather(*delays)

    orgDelays: List = []

    for i in range(n):
        mDelay = min(aDelays)
        orgDelays.append(mDelay)
        aDelays.remove(mDelay)

    return orgDelays
