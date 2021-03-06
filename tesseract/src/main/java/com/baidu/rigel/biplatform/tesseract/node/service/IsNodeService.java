/**
 * Copyright (c) 2014 Baidu, Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package com.baidu.rigel.biplatform.tesseract.node.service;

import java.util.List;
import java.util.Map;

import com.baidu.rigel.biplatform.tesseract.isservice.meta.IndexShard;
import com.baidu.rigel.biplatform.tesseract.node.meta.Node;

/**
 * 
 * ISNodeService
 * 
 * @author lijin
 *
 */
public interface IsNodeService {
    
    /**
     * 
     * 跟据当前节点情况就近分配新的节点
     * 
     * @param existNodeList
     *            备选节点列表
     * @param blockCount
     *            需要的索引块个数
     * @param clusterName
     *            集群名称
     * @return List<Node> 返回分配的节点及每个节点上分配的块数
     */
    Map<Node, Integer> assignFreeNodeByNodeList(List<Node> existNodeList, int blockCount,
        String clusterName);
    
    /**
     * 
     * 跟据节点空闲情况分配新的节点
     * 
     * @param blockCount
     *            需要的节点个数
     * @param clusterName
     *            集群名称
     * @return List<Node> 返回分配的节点及每个节点上分配的块数
     */
    Map<Node, Integer> assignFreeNode(int blockCount, String clusterName);
    
    /**
     * 
     * 申请节点副本
     * 
     * @param blockCount
     *            需要的个数
     * @param node
     *            当前的结点
     * @return List<Node> 返回申请到的节点列表
     */
    List<Node> assignFreeNodeForReplica(int blockCount, Node node);
    
    /**
     * 
     * 跟据集群名称，获取该集群下的所有机器节点
     * 
     * @param clusterName
     *            集群名
     * @return List<Node> 该集群下的所有机器节点
     */
    List<Node> getNodeListByClusterName(String clusterName);
    
    /**
     * 
     * 保存节点信息
     * 
     * @param node
     *            需要保存的节点
     * @return boolean 保存成功返回true,否则为false
     */
    boolean saveOrUpdateNodeInfo(Node node);
    
    /**
     * 
     * getAvailableNodeListByClusterName 给定集群名称获得当前存活的节点列表
     * 
     * @param clusterName
     *            集群名称
     * @return List<Node> List<Node>
     */
    List<Node> getAvailableNodeListByClusterName(String clusterName);
    
    /**
     * 
     * getAvailableNodeListByIndexShard 获取当前索引分片下存活的节点列表
     * 
     * @param idxShard
     *            索引分片
     * @return List<Node> List<Node>
     */
    List<Node> getAvailableNodeListByIndexShard(IndexShard idxShard);
    
    /**
     * 
     * getFreeSearchNodeByIndexShard 获取当前索引分片下空闲的查询节点
     * 
     * @param idxShard
     * @return Node
     */
    Node getFreeSearchNodeByIndexShard(IndexShard idxShard);
    
    /**
     * 
     * 标记与node同一集群中的节点是否为bad结点
     * 
     * @param node
     */
    void markClusterBadNode(Node node);
    
    /**
     * 
     * 跟据给定的节点，从缓存中取到最新的结点信息
     * 
     * @param node
     * 
     * @return Node 返回找到的结点
     */
    Node getNodeByCurrNode(Node node);
    
    /**
     * 
     * 保存节点镜像
     * 
     * @param node
     *            node
     */
    void saveNodeImage(Node node);
    
    /**
     * 
     * loadLocalNodeImage 从本地镜像中恢复node数据
     * 
     * @param node
     *            当前待恢复的节点
     * @return ode 恢复后的节点信息
     */
    Node loadLocalNodeImage(Node node);
    
    /**
     * 
     * 取得当前节点
     * 
     * @return
     */
    Node getCurrentNode();
    
}
