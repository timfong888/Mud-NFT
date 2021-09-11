// SPDX-License-Identifier: MIT
// create-nft.sol

pragma solidity ^0.8.0;


import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract mintMudNFT is ERC721URIStorage {
    
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    
    enum Type_enum {
            Room,
            Corridor,
            Field,
            Path
        }
    
    enum Light_enum {
            Dark,
            BrightlyLit,
            Dim
        }
        
    struct Place {
        
        string name;
        
        Type_enum type_field;
        
        string[] alt_names;
        string description;
        Light_enum light;
        
    }
    
    struct Door {
        string name;
        string description;
        string when_closed;
        string when_opened;
        bool lockable;
        bool initial_opened;
        bool initial_locked;
        string connecting;
        
    }
    
    uint256 public tokenCounter;
    
    constructor() ERC721 ("Ruin", "EPIC") {}
        
    function createNFT(address sender, string memory tokenURI) public returns (uint256) {
        
        // mint token: https://docs.openzeppelin.com/contracts/4.x/erc721
        
        _tokenIds.increment();
        
        uint256 newItemId = _tokenIds.current();
        
        _mint(msg.sender, newItemId);
        _setTokenURI(newItemId, tokenURI);

        return newItemId;
        
    }
    
}
