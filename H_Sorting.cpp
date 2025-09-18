#include <bits/stdc++.h>
using namespace std;
#define ll long long

void solve () {
   int n; cin >> n;
   vector<int>a(n);
   for (int i = 0; i < n; i++) cin >> a[i];
   
   for (int i = 0; i < n; i++) {
    for (int j = 0; j < n - i - 1; j++) {
      if(a[j] > a[j+ 1]) swap(a[j], a[j+1]);
    }
   }

   for (int i = 0; i < n; i++) cout << a[i] << " ";
}

int main() {
    ios::sync_with_stdio(false);cin.tie(nullptr);
    solve ();
    return 0;
}
