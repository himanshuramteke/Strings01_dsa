//01.Question Name: Reconstruct Permutation

function findPermutation(s) {
    const n = s.length;
    const perm = new Array(n + 1);
    let low = 0, high = 0;
    
    for (let i = 0; i <= n; i++) {
      if (i === n || s[i] === 'I') {
        perm[i] = high++;
        for (let j = i - 1; j >= low; j--) {
          perm[j] = high++;
        }
        low = i + 1;
      }
    }
    
    return perm;
  }
  
  // Test the function
  const s = "IDID";
  const permutation = findPermutation(s);
  console.log(permutation);
  