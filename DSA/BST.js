//Binary Search Tree

//Checking the github account

class Node {
    constructor(data, left = null, right = null){
        this.data = data
        this.left = left
        this.right = right
    }
}

class BST {
    constructor(){
        this.root = null;
    }
    add(data){
        const node = this.root;
        if(node == null){
            this.root = new Node(data)
            return
        }else{
            const searchTree = function(node){
                if(data < node.data){
                    if(node.left === null){
                        node.left = new Node(data)
                    }else if (node.left != null){
                    return searchTree(node.left)
                }
                }else if (data > node.data){
                    if(node.right === null){
                        node.right = new Node(data)
                    }else if (node.right != null){
                        return searchTree(node.right)
                    }
                }else {
                    return null
                }
            }
            return searchTree(node)
        }
    }

    findMin(){
        let current = this.root;
        while(current.left != null){
            current = current.left;
        }
        return current.data
    }
    findMax(){
        let current = this.root;
        while(current.right !=null){
            current = current.right;
        }
        return cureent.data
    }
    find(data){
        let current = this.root;
        while(current.data != data){
            if(data < current.data){
                current = current.left
            }else{
                current = current.right
            }
            if(current === null){
                return null
            }
        }
        return current;
    }


    isPresent(data){
        let current = this.root;
        // while(current.data != data){
        //     if(data < current.data){
        //         current = current.left
        //     }else {
        //         current = current.right;
        //     }
        //     if(current === null){
        //         return false
        //     }
        // }
        // return true
        while(current){
            if(current.data=== data){
                return true
            } 
            if(data < current.data){
                current = current.left;
            }else{
                current = current.right;
            }    
        }
    }

    remove(data){
        const removeNode = function(node, data){
            if(node == null){
                return null
            }
            if(data == node.data){
                if(node.left == null && node.right == null){
                    return null
                }
                if(node.left == null){
                    return node.right;
                }
                if(node.right == null){
                    return node.left
                }
                let tempNode = node.right;
                while(tempNode.left !== null){
                    tempNode = tempNode.left;
                }
                node.data = tempNode.data;
            }
        }  
    }
}