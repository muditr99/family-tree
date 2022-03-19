class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BST{
    constructor(data){
        this.root  = new Node(data);
        this.count = 0;
    }

    size(){
        return this.count;
    }

    insert(data){
        this.count++;

        let newNode = new Node(data);

        function searchTree(node){
            if(data < node.data){
                if(!node.left){
                    node.left = newNode;
                }else{
                    searchTree(node.left);
                }
            }else if(data > node.data){
                if(!node.right){
                    node.right = newNode;
                }else{
                    searchTree(node.right);
                }
            }
        }
            searchTree(this.root);
    }
}

module.exports = Node;
module.exports = BST;
