import React, { useState } from "react";
import { Box, Heading, Text, Button, Input, Stack, Grid, GridItem, Image, useToast } from "@chakra-ui/react";
import { FaPlus, FaMinus, FaCog, FaEdit } from "react-icons/fa";

const Index = () => {
  const [tokenId, setTokenId] = useState("");
  const [amount, setAmount] = useState("");
  const [address, setAddress] = useState("");
  const [role, setRole] = useState("");
  const [baseURI, setBaseURI] = useState("");
  const [tokens, setTokens] = useState([]);

  const toast = useToast();

  const handleMintToken = () => {
    // TODO: Integrate with smart contract to mint token
    const newToken = { id: tokenId, amount: amount };
    setTokens([...tokens, newToken]);
    setTokenId("");
    setAmount("");
    toast({
      title: "Token Minted",
      description: `Token ID: ${tokenId}, Amount: ${amount}`,
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  const handleBatchMint = () => {
    // TODO: Integrate with smart contract to batch mint tokens
    toast({
      title: "Batch Mint",
      description: "Batch minting functionality coming soon!",
      status: "info",
      duration: 3000,
      isClosable: true,
    });
  };

  const handleSetRole = () => {
    // TODO: Integrate with smart contract to set role
    toast({
      title: "Role Set",
      description: `Address: ${address}, Role: ${role}`,
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    setAddress("");
    setRole("");
  };

  const handleRemoveRole = () => {
    // TODO: Integrate with smart contract to remove role
    toast({
      title: "Role Removed",
      description: `Address: ${address}`,
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    setAddress("");
  };

  const handleUpdateBaseURI = () => {
    // TODO: Integrate with smart contract to update base URI
    toast({
      title: "Base URI Updated",
      description: `New Base URI: ${baseURI}`,
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    setBaseURI("");
  };

  return (
    <Box p={8}>
      <Heading as="h1" size="xl" mb={8}>
        ERC1155 Token Management
      </Heading>

      <Grid templateColumns="repeat(2, 1fr)" gap={8}>
        <GridItem>
          <Box mb={4}>
            <Heading as="h2" size="lg" mb={2}>
              Mint Token
            </Heading>
            <Stack spacing={4}>
              <Input placeholder="Token ID" value={tokenId} onChange={(e) => setTokenId(e.target.value)} />
              <Input placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
              <Button leftIcon={<FaPlus />} onClick={handleMintToken}>
                Mint Token
              </Button>
            </Stack>
          </Box>

          <Box mb={4}>
            <Heading as="h2" size="lg" mb={2}>
              Batch Mint
            </Heading>
            <Button leftIcon={<FaPlus />} onClick={handleBatchMint}>
              Batch Mint Tokens
            </Button>
          </Box>

          <Box mb={4}>
            <Heading as="h2" size="lg" mb={2}>
              Manage Roles
            </Heading>
            <Stack spacing={4}>
              <Input placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} />
              <Input placeholder="Role" value={role} onChange={(e) => setRole(e.target.value)} />
              <Button leftIcon={<FaCog />} onClick={handleSetRole}>
                Set Role
              </Button>
              <Button leftIcon={<FaMinus />} onClick={handleRemoveRole}>
                Remove Role
              </Button>
            </Stack>
          </Box>

          <Box>
            <Heading as="h2" size="lg" mb={2}>
              Update Base URI
            </Heading>
            <Stack spacing={4}>
              <Input placeholder="New Base URI" value={baseURI} onChange={(e) => setBaseURI(e.target.value)} />
              <Button leftIcon={<FaEdit />} onClick={handleUpdateBaseURI}>
                Update Base URI
              </Button>
            </Stack>
          </Box>
        </GridItem>

        <GridItem>
          <Heading as="h2" size="lg" mb={4}>
            Tokens
          </Heading>
          {tokens.map((token) => (
            <Box key={token.id} mb={4}>
              <Image src={`https://images.unsplash.com/photo-1644361566696-3d442b5b482a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxuZnQlMjB0b2tlbiUyMCUyNCU3QnRva2VuLmlkJTdEfGVufDB8fHx8MTcxMjQ3MjA1Mnww&ixlib=rb-4.0.3&q=80&w=1080`} alt={`Token ${token.id}`} mb={2} />
              <Text>
                Token ID: {token.id}, Amount: {token.amount}
              </Text>
            </Box>
          ))}
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Index;
