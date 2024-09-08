# Redis基础知识

## 安装Redis

1. 下载

    ```text
    cd /usr/local/ 
    sudo wget http://download.redis.io/releases/redis-5.0.9.tar.gz
   ```

2. 解压

    ```text
   sudo tar xvf redis-5.0.9.tar.gz
   ```

3. 编译

    ```text
    下载安装c编译环境（本地已安装gcc则跳过）
    sudo apt-get update
    sudo apt-get install gcc
    编译Redis
    sudo make distclean  && sudo make
   ```

4. 启动

    ```text
    启动服务端
    cd /usr/local/bin/
    redis-server ../redis-5.0.9/redis.conf
    启动客户端（另起窗口）
    cd /usr/local/bin/
    redis-cli
   ```

## Redis数据类型及命令

> Redis数据类型由string（字符串），hash（散列表），list（列表），set（集合），zset（有序集合）等基础数据类型以及bitmaps（位图），hyperloglogs（超日志），geospatial（地理空间）等高级数据类型构成。

- DEL key 删除key
- EXISTS key 检查key是否存在
- KEYS pattern 查找符合条件的key
- EXPIRE key 设置key过期时间
- PERSIST key 移除过期时间
- TTL key 剩余过期时间
- RANDOMKEY 随机返回一个key
- TYPE key 返回key的类型

### string

- SET key value 设置key的值
- SETEX key seconds value 设置key的值和过期时间
- SETNX key value 只有在key不存在时设置key的值
- GET key 获取key的值
- GETRANGE key start end 获取key中字符串值的子字符
- MSET key value [key value ...] 同时设置一个或多个键值对
- MGET key1 [key2..] 获取所有一个或多个给定key的值
- MSETNX key value [key value ...] key<font color = "red">都不存在</font>时同时设置一个或多个键值对
- INCR key 将key中储存的数字值增一
- INCRBY key increment 将key所储存的值加上给定的增量值（increment）
- DECR key 将key中储存的数字值减一
- DECRBY key decrement key所储存的值减去给定的减量值（decrement）

### hash

> hash是一个string类型的field和value的映射表，hash特别适合用于存储对象。

- HSET key field value 将key中的字段field的值设为value
- HSETNX key field value 只有在字段不存在时，设置哈希表字段的值
- HGET key field 获取key中filed字段的值
- HMSET key field1 value1 [field2 value2 ] 同时设置多个给定字段的值
- HMGET key field1 [field2] 获取所有给定字段的值
- HGETALL key 获取key的所有字段和值
- HKEYS key 获取所有字段
- HVALS key 获取哈希表中所有值
- HLEN key 获取哈希表中字段的数量
- HEXISTS key field 查看key中，field的字段是否存在
- HDEL key field1 [field2] 删除一个或多个字段
- HINCRBY key field increment 指定字段的整数值加上增量increment
- HINCRBYFLOAT key field increment 指定字段的浮点数值加上增量increment

### list

> Redis列表是简单的字符串列表，按照插入顺序排序。你可以添加一个元素导列表的头部（左边）或者尾部（右边）一个列表最多可以包含2<sup>32 - 1 </sup>个元素。

- RPUSH key value1 [value2] 在列表<font color = "red">尾部</font>添加一个或多个值
- RPUSHX key value 在列表尾部添加值
- LPUSH key value1 [value2] 在列表<font color = "red">头部</font>添加一个或多个值
- LPUSHX key value 在列表头部添加值
- RPOP key 移除列表<font color = "red">尾部</font>元素并返回值
- BRPOP key1 [key2 ] timeout 移除尾部元素，如果列表没有元素会阻塞列表直到等待超时或发现可弹出元素为止
- LPOP key 移除列表<font color = "red">头部</font>元素并返回值
- BLPOP key1 [key2 ] timeout 移除头部元素，如果列表没有元素会阻塞列表直到等待超时或发现可弹出元素为止
- LINDEX key index 通过索引获取列表中的元素
- LSET key index value 通过索引设置列表元素的值
- LINSERT key BEFORE|AFTER pivot value 在列表的元素前或者后插入元素
- LLEN key 获取列表长度
- LRANGE key start stop 获取列表指定范围内的元素

### set

> set是string类型的无序集合。集合成员是唯一的，这就意味着集合中不能出现重复的数据。集合是通过哈希表实现的，所以添加，删除，查找的复杂度都是O(1)。 集合中最大的成员数为2<sup>32 - 1 </sup>个元素。

- SADD key member1 [member2] 向集合添加成员
- SMEMBERS key 返回集合中的所有成员
- SRANDMEMBER key [count] 返回集合中一个或多个随机数
- SCARD key 获取集合的成员数
- SISMEMBER key member 判断集合的成员
- SPOP key 移除并返回集合中的一个随机元素
- SREM key member1 [member2] 移除集合中成员
- SSCAN key cursor [MATCH pattern] [COUNT count] 从cursor位置开始迭代集合中的元素
- SDIFF key1 [key2] 返回第一个集合与其他集合之间的差异
- SINTER key1 [key2] 返回给定所有集合的交集
- SUNION key1 [key2] 返回所有给定集合的并集

### zset

> zset有序集合和set集合一样也是string类型元素的集合,且不允许重复的成员。 不同的是每个元素都会关联一个double类型的分数。redis正是通过分数来为集合中的成员进行从小到大的排序。 有序集合的成员是唯一的,但分数(score)却可以重复。
